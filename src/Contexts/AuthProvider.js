import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
import LazyLoading from '../components/LazyLoading';

const auth = getAuth(app)
export const AuthContext = createContext()

  



const AuthProvider = ({children}) => {

    // inside components
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // signup with email and password
    const createUserWithEmailPass = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login with email and password

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
// update user profile
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }
// logoout user
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
// social signin
const socialSignIn = (provider)=>{
    return signInWithPopup(auth,provider)
}

const deleteUserInfo = (user)=>{

    return deleteUser(user)

}


// ovsrver
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
           
            setUser(currentUser);
            setLoading(false);
        });
console.log(user) 
        return () => unsubscribe();

    }, [])
    
    if(loading){
        return <LazyLoading/>
    }

    const authInfo = {
        createUserWithEmailPass,
        signIn,
        updateUser,
        logOut,
        user,
        loading,
        socialSignIn,
        deleteUserInfo
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;