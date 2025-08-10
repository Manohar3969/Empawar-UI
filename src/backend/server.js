import dotenv from 'dotenv';

import express from 'express';
import cors from 'cors';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const app = express();
app.use(cors());
app.use(express.json());

// Pick the env file based on NODE_ENV or a custom env var
const envFile = process.env.NODE_ENV === 'qa' ? '.env.qa' : '.env.dev';
dotenv.config({ path: envFile });
console.log(`Loaded environment from ${envFile}`);
console.log('Loaded Razorpay Key ID:', process.env.RAZORPAY_KEY_ID);
console.log('Loaded Razorpay Secret:', process.env.RAZORPAY_SECRET ? '***hidden***' : 'Not Found');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});

// Create order - called by frontend to get order info from Razorpay API
app.post('/create-order', async (req, res) => {
    const {amount, currency = 'INR'} = req.body;

    if (!amount) {
        return res.status(400).json({success: false, message: 'Amount is required'});
    }

    const options = {
        amount: amount * 100, // amount in paisa (if INR)
        currency,
        receipt: `receipt_${Date.now()}`,
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json({success: true, order});
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({success: false, message: 'Failed to create order'});
    }
});

// Verify payment signature from frontend's payment response
app.post('/verify-payment', (req, res) => {
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;

    const generated_signature = crypto
        .createHmac('sha256', process.env.RAZORPAY_SECRET)
        .update(razorpay_order_id + '|' + razorpay_payment_id)
        .digest('hex');

    if (generated_signature === razorpay_signature) {
        res.json({success: true, message: 'Payment verified successfully'});
    } else {
        res.status(400).json({success: false, message: 'Payment verification failed'});
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
