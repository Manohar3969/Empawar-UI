import {useNavigate} from "react-router-dom";

export const ProductDetails = (props) => {
    const navigate = useNavigate();
    const cartItem = () => {
        try {
            navigate('/cartPage', {state: {price: props.productPrice}})
        } catch (err) {
            alert('Navigation Failed! : ' + err.message);
        }
    }


    return (
        <div className="w-full flex bg-gray-100">
            <div className="w-3/5 p-5">
                <img className="w-1/2 p-2 float-left cursor-zoom-in" src="src/assets/dress1.jpeg" alt=""/>
                <img className="w-1/2 p-2 float-left cursor-zoom-in" src="src/assets/dress1.jpeg" alt=""/>
                <img className="w-1/2 p-2 float-left cursor-zoom-in" src="src/assets/dress1.jpeg" alt=""/>
                <img className="w-1/2 p-2 float-left cursor-zoom-in" src="src/assets/dress1.jpeg" alt=""/>
            </div>
            <div className="w-2/5">
                <div className="p-5 font-bold text-lg"> Krishna Face Printed T - shirt</div>
                <div className="pl-5"> MRP: {props.productPrice}</div>
                <div className="pl-5 text-green-500"> inclusive of all taxes</div>
                <div className="p-5">
                    <button className="bg-blue-500 w-1/3 pl-5 pr-5 pb-3 pt-3 ml-5 text-white font-medium" onClick={cartItem}> Add to Cart
                    </button>
                    <button className="bg-red-500 w-1/3 pl-5 pr-5 pb-3 pt-3 ml-5 text-white font-medium"> Wishlist
                    </button>
                </div>
                <div className="pl-5 pt-5"><p className="font-bold">Product Code:</p> 2000155789</div>
                <div className="pl-5 pt-10 font-bold"> Product Description</div>
                <div className="p-5">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                        Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                        ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                        sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
                        luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                        sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
                        tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
                        consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
                </div>
                <div className="pl-5 pt-5">Reviews and Ratings</div>
                <div className="pl-5 pb-10">4 out of 5 Stars</div>
            </div>
        </div>
    )
}