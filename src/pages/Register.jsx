import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const Register = () => {

    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("V");
    const [userEmailID, setUserEmailID] = useState("");
    const [userMobileNumber, setUserMobileNumber] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userRole, setUserRole] = useState("customer");
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleRegistration = async () => {
        try {
            setErrorMessage('');
            const res = await axios.post(import.meta.env.VITE_API_BASE_URL + '/users', {
                userFirstName,
                userLastName,
                userEmailID,
                userMobileNumber,
                userRole,
                userPassword
            });
            navigate('/signin', {replace: true});
        } catch (err) {
            //alert('Registration failed ' + err);
            setErrorMessage(err.response?.data);
        }
    };

    const signUp = () => {
        try {
            navigate('/signin', {replace: true})
        } catch (err) {
            alert('Navigation Failed! : ' + err.message);
        }
    }

    return (
        <div className="bg-gray-100 rounded-md w-1/3 h-4/6 top-1/6 left-1/3 absolute justify-center">
            <div className="flex pt-16 pb-5 logo font-bold text-4xl justify-center align-middle items-center">
                <span>Empawar</span>
            </div>
            <div className="flex p-2 font-bold text-lg justify-center align-middle items-center">
                <span>Sign Up</span>
            </div>
            <div className="flex pr-20 pl-20 mt-4 items-center">
                <input
                    className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                    type="text"
                    placeholder="Enter Name"
                    onChange={e => setUserFirstName(e.target.value)}
                />
            </div>
            <div className="flex pr-20 pl-20 mt-4 items-center">
                <input
                    className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                    type="text"
                    placeholder="Enter Email ID"
                    onChange={e => setUserEmailID(e.target.value)}
                />
            </div>

            <div className="flex pr-20 pl-20 mt-4 items-center">
                <input
                    className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                    type="text"
                    placeholder="Enter Mobile Number"
                    onChange={e => setUserMobileNumber(e.target.value)}
                />
            </div>

            <div className="flex pr-20 pl-20 mt-4 items-center">
                <input
                    className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                    type="text"
                    placeholder="Enter New Password"
                    onChange={e => setUserPassword(e.target.value)}
                />
            </div>


            <div className="flex text-md items-center justify-center">
                <button
                    className="bg-amber-600 pl-8 pr-8 pt-2 pb-2 mt-8 rounded-md text-white cursor-pointer"
                    type="submit"
                    onClick={handleRegistration}
                >
                    Sign Up
                </button>
            </div>


            <div className="flex pt-4 text-sm justify-center align-middle items-center">
        <span>
          Already Have an Account?{" "}
            <a className="text-blue-600" href="#" onClick={signUp}>
            Sign In
          </a>
        </span>
            </div>
            {errorMessage &&
                <div className="flex pt-4 text-sm justify-center align-middle items-center">
                    <span className="text-red-600">
                        {errorMessage}
                    </span>
                </div>
            }
        </div>
    );
};
