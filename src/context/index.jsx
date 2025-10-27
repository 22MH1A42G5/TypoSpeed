import React from "react";
import { createContext, useState , useEffect , useContext} from "react";
import { app } from "../Credentials";
import {getAuth , GoogleAuthProvider , createUserWithEmailAndPassword , onAuthStateChanged , signOut , signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth'
import {set , ref , get , onValue, getDatabase } from 'firebase/database'

const GoogleProvider = new GoogleAuthProvider();

export const useDataBase = () => useContext(DataContext);

const DataContext = createContext(null);
const DataAuth = getAuth(app);
const database = getDatabase(app);



export const DataProvider = (props) => {
    const [user , setUser] = useState(null);
    const [userEmail,setUserEmail] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(DataAuth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const signupUserWithEmailAndPassword = async (email , password) => {
        return createUserWithEmailAndPassword(DataAuth , email , password).then(value => console.log(value));
    }
    const putData = (key , data) => {
        set(ref(database , key) , data);
    }

    const Logout = ()=>{
        signOut(DataAuth);
    }

    const signUpWithGoogle = ()=>{
        signInWithPopup(DataAuth,GoogleProvider);
    }

    const loginUserWithEmailAndPassword = async (email,password)=>{
        return signInWithEmailAndPassword(DataAuth,email,password);
    }

    return (
        <DataContext.Provider value={{user,setUser , signupUserWithEmailAndPassword , putData,loginUserWithEmailAndPassword,Logout,signUpWithGoogle}}>
            {props.children}
        </DataContext.Provider>
    )
}
