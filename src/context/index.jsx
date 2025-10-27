import React from "react";
import { createContext, useState , useEffect , useContext} from "react";
import { app } from "../Credentials";
import {getAuth , GoogleAuthProvider , createUserWithEmailAndPassword , onAuthStateChanged , signOut , signInWithPopup} from 'firebase/auth'
import {set , ref , get , onValue, getDatabase } from 'firebase/database'

const GoogleProvider = new GoogleAuthProvider();

export const useDataBase = () => useContext(DataContext);

const DataContext = createContext(null);
const DataAuth = getAuth(app);
const database = getDatabase(app);


export const DataProvider = (props) => {
    const [user , setUser] = useState([]);
    const signupUserWithEmailAndPassword = (email , password) => {
        return createUserWithEmailAndPassword(DataAuth , email , password).then(value => console.log(value));
    }
    const putData = (key , data) => {
        set(ref(database , key) , data);
    }
    return (
        <DataContext.Provider value={{user,setUser , signupUserWithEmailAndPassword , putData}}>
            {props.children}
        </DataContext.Provider>
    )
}
