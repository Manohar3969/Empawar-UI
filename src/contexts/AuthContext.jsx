// src/contexts/AuthContext.jsx
import React, {createContext, useContext, useState} from 'react';

// Create Context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    // Mock logged-in user (replace with API later)
    const [user, setUser] = useState({
        name: 'Monica',
        email: 'monica@example.com',
        avatar: 'https://thumbs.dreamstime.com/b/closeup-portrait-beautiful-young-smiling-indian-woman-pretty-smile-95393005.jpg'
    });

    const logout = () => {
        // Mock logout
        setUser(null);
        alert('Logged out!');
    };

    return (
        <AuthContext.Provider value={{user, setUser, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
