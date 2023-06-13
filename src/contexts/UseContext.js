import { React, createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const UseContext = ({ children }) => {

    const [user, setUser] = useState({});
    const [loding, setLoding] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("CurrentUser", currentUser);
            setLoding(false);
        });

        return () => {
            unsubsribe();
        }
    }, [])

    // Google Auth Provider area start 
    const googleAuthPopup = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = { user, createUser, singinUser, logOut, googleAuthPopup, loding };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;

