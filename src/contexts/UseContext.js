import { React, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);

const UseContext = ({ children }) => {

    const [user, setUser] = useState({ displayName: "Rakib tv" });
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("CurrentUser", currentUser);
        });

        return () => {
            unsubsribe();
        }
    }, [])
    const authInfo = { user, createUser, singinUser };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;

