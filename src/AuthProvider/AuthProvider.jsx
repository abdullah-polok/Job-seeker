
import { useEffect, createContext, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [allbids, setallbids] = useState([])
    const [buyeremail, setbuyeremail] = useState('')
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
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    console.log(buyeremail)

    const userInfo = { user, setUser, loading, createUser, signInUser, loginUserPop, logoutUser, buyeremail, setbuyeremail, allbids, setallbids }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;