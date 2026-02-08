import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    console.log(user)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleSignOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const userData = {
        user,
        setUser,
        createUser,
        LoginUser,
        handleSignOut
    }
    return <AuthContext value={userData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;