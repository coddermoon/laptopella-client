import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext()

const socialSignIn = (provider)=>{
    return signInWithPopup(auth,provider)
}

const AuthProvider = ({children}) => {

    const authInfo = {socialSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;