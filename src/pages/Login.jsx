import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:8080/api/users/login', {username, password});
            localStorage.setItem('token', res.data.token);
            navigate('/home', {replace: true});
        } catch (err) {
            alert('Login failed ' + err);
            navigate('/logout', {replace: true});
        }
    };

    const signUp = () => {
        try {
            navigate('/signup', {replace: true})
        } catch (err) {
            alert('Navigation Failed! : ' + err.message);
        }
    }

    return (
        <div className="bg-gray-100 rounded-md w-1/3 h-2/4 top-1/4 left-1/3 absolute justify-center">
            <div className="flex pt-16 pb-5 logo font-bold text-4xl justify-center align-middle items-center">
                <span>Empawar</span>
            </div>
            <div className="flex p-2 font-bold text-lg justify-center align-middle items-center">
                <span>Sign In</span>
            </div>
            <div className="flex pr-20 pl-20 mt-4 items-center">
                <input
                    className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                    type="text"
                    value={username}
                    onChange={e => setusername(e.target.value)}
                    placeholder="Enter Email ID"
                />
            </div>
            <div className="flex pr-20 pl-20 mt-4 items-center">
                <input
                    className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter Password"
                />
            </div>
            <div className="flex text-md items-center justify-center">
                <button
                    className="bg-amber-600 pl-8 pr-8 pt-2 pb-2 mt-8 rounded-md text-white cursor-pointer"
                    type="submit"
                    onClick={handleLogin}
                >
                    Sign In
                </button>
            </div>
            <div className="flex pt-4 text-sm justify-center align-middle items-center">
        <span>
          Create a New Account?{" "}
            <a className="text-blue-600" href="#"
               onClick={signUp}>
            Sign Up
          </a>
        </span>
            </div>
        </div>
    );
};
