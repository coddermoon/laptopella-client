import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const AuthContext = createContext()

const socialSignIn = ()=>{
    
}

const AuthProvider = ({children}) => {

    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;