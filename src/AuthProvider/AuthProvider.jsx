
import { useEffect, createContext, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    ////extra login
    const provider = new GoogleAuthProvider();

    ///create user using firebase
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    ///signInUser

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginUserPop = () => {
        return signInWithPopup(auth, provider)
    }


    ///log out user
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            ////take user email before set 
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }

            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
            ////jwt token 
            //if user exist then issue a token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data)
                    })
            }
            /// if user not exits 
            ///for remove the cookie from local storage
            else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                    .then(res => console.log(res.data))
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const userInfo = { user, setUser, loading, createUser, signInUser, loginUserPop, logoutUser }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;