// src/components/FailureMessage.jsx
import React from 'react';

export default function FailureMessage({ retry }) {
    return (
        <div className="bg-red-50 border border-red-400 p-4 rounded">
            <h3 className="text-red-700 font-bold text-xl">❌ Payment Failed</h3>
            <p>Something went wrong with your payment. Please try again.</p>
            <button onClick={retry} className="bg-blue-600 text-white px-4 py-2 mt-3 rounded">
                Retry Payment
            </button>
        </div>
    );
}
