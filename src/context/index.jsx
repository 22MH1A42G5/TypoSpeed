import React from "react";
import { createContext, useState , useEffect , useContext} from "react";
import { app } from "../Credentials";
import {getAuth , GoogleAuthProvider , createUserWithEmailAndPassword , onAuthStateChanged , signOut , signInWithPopup} from 'firebase/auth'
import {set , ref , get , onValue, getDatabase } from 'firebase/database'
import {doc , getDoc , getFirestore, setDoc} from 'firebase/firestore'

const GoogleProvider = new GoogleAuthProvider();

export const useDataBase = () => useContext(DataContext);

const DataContext = createContext(null);
const DataAuth = getAuth(app);
const database = getDatabase(app);
const fireStoreDB = getFirestore(app);


export const DataProvider = (props) => {
    const [uid , setUid] = useState(null);
    const signupUserWithEmailAndPassword = (email , password) => {
        return createUserWithEmailAndPassword(DataAuth , email , password);
    }
    const isUsernameAvailable = async (username) => {
        const usernameRef = doc(fireStoreDB, "usernames", username);
        const usernameSnap = await getDoc(usernameRef);
        return !usernameSnap.exists(); // true means available
    };
    const createUserProfileInFirestore = async (mail , uid , username,password) => {
        const userRef = doc(fireStoreDB , "users" , uid);
        const usernameRef = doc(fireStoreDB ,"usernames" , username);
        const docSnap = await getDoc(userRef);
        if(!docSnap.exists()){
            await setDoc(userRef , {
                displayName: username,
                email : mail ,
                photoURL : "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
                highestWPM : 0,
                averageAccuracy :0,
                totalSessions: 0,
                lastActive: new Date(),
                memberSince:new Date()
            });
        }
        await setDoc(usernameRef ,{
            uid:username,
            pass:password
        } )
    };
    const saveTypingSession = async (uid, sessionData) => {
        try {
            // Add new session
            const sessionsRef = collection(db, "users", uid, "sessions");
            await addDoc(sessionsRef, {
                timestamp: new Date(),
                wpm: sessionData.wpm || 55,
                accuracy: sessionData.accuracy || 95,
                errors: sessionData.errors || 5,
                duration: sessionData.duration || 525,
                charactersTyped: sessionData.charactersTyped || 1234,
                wordsTyped: sessionData.wordsTyped || 45,
                textId: sessionData.textId || 1,
            });

            // Update user profile after saving session
            // await updateUserStats(uid, sessionData.wpm, sessionData.accuracy);

        } catch (error) {
            console.error("Error saving typing session:", error);
        }
    }
    const putData = (key , data) => {
        set(ref(database , key) , data);
    }
    return (
        <DataContext.Provider value={{uid,setUid , signupUserWithEmailAndPassword , putData , createUserProfileInFirestore , isUsernameAvailable}}>
            {props.children}
        </DataContext.Provider>
    )
}
