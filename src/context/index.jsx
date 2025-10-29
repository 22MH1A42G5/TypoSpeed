import React from "react";
import { createContext, useState , useEffect , useContext} from "react";
import { app } from "../Credentials";
import {getAuth , GoogleAuthProvider , createUserWithEmailAndPassword , onAuthStateChanged , signOut , signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth'
import {set , ref , get , onValue, getDatabase } from 'firebase/database'
import {doc , getDoc , getFirestore,getDocs, setDoc ,query , orderBy , limit , collection , addDoc , updateDoc} from 'firebase/firestore'

const GoogleProvider = new GoogleAuthProvider();


const DataContext = createContext(null);
export const useDataBase = () => useContext(DataContext);

const DataAuth = getAuth(app);
const database = getDatabase(app);
const fireStoreDB = getFirestore(app);


export const DataProvider = (props) => {
    const [user , setUser] = useState(null);
    const [userEmail,setUserEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const [uid , setUid] = useState(null);
    const [verified,setVerified] = useState(false);
    const stats = { highestWPM:0 , averageAccuracy:0.00 , totalSessions:0 };
  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(DataAuth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            setVerified(currentUser.emailVerified);
        });
        return () => unsubscribe();
    }, []);

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
                memberSince:new Date(),
                streak:0,
                lastSessionDate:null,
                highestWPMDate: new Date(),
                longestStreak : 0,
                longestStreakDate:new Date(),
                averageWPM:0,
            });
        }
        await setDoc(usernameRef ,{
            uid:username,
            pass:password,
        })
    };
    const saveTypingSession = async (uid, sessionData) => {
        try {
            // Add new session
            const sessionsRef = collection(fireStoreDB, "users", uid, "sessions");
            await addDoc(sessionsRef, {
                timestamp: new Date(),
                wpm: sessionData.wpm,
                accuracy: sessionData.accuracy,
                errors: sessionData.errors,
                duration: sessionData.duration,
                charactersTyped: sessionData.charsTyped,
                wordsTyped: sessionData.wordsTyped,
                textId: sessionData.textId,

            });
            console.log("sessionadded");
            // Update user profile after saving session
            await updateUserStats(uid, sessionData.wpm, sessionData.accuracy);
        } catch (error) {
            console.error("Error saving typing session:", error);
        }
    }


    const updateUserStats = async (uid, newWPM, newAccuracy) => {
        const userRef = doc(fireStoreDB, "users", uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const userData = userSnap.data();

            const totalSessions = userData.totalSessions + 1;
            const newAvgAccuracy = ((userData.averageAccuracy * userData.totalSessions) + newAccuracy) / totalSessions;
            const averageWPM = ((userData.averageWPM * userData.totalSessions) + newWPM) / totalSessions;
            const highestWPM = Math.max(userData.highestWPM, newWPM);
            const highestWPMDate = userData.highestWPM < newWPM ? new Date() : userData.highestWPMDate;

            const today = new Date();
            const lastSessionDate = userData.lastSessionDate
            ? new Date(userData.lastSessionDate.toDate ? userData.lastSessionDate.toDate() : userData.lastSessionDate)
            : null;

            let streak = userData.streak || 0;

            if (lastSessionDate) {
            const diffInDays = Math.floor((today - lastSessionDate) / (1000 * 60 * 60 * 24));
            if (diffInDays === 1) {
                // Continued streak
                streak = 1;
            } else if (diffInDays === 0) {
                // same day → no change
            } else {
                // Missed a day
                streak = 1;
            }
            } else {
                streak = 1; // first session
            }
            streak += 1;
            const longestStreak = Math.max(userData.longestStreak, streak);
            const longestStreakDate = userData.longestStreak < longestStreak ? new Date() : userData.longestStreakDate;


            await updateDoc(userRef, {
                lastSessionDate: new Date(),
                highestWPM,
                averageAccuracy: parseFloat(newAvgAccuracy.toFixed(2)),
                totalSessions,
                lastActive: new Date(),
                streak,
                highestWPMDate,
                longestStreak,
                longestStreakDate,
                averageWPM :parseFloat(averageWPM.toFixed(2)),
            });
        }
    };

    const getUserProfile = async (uid) => {
        const userRef = doc(fireStoreDB, "users", uid);
        const docSnap = await getDoc(userRef);
        return docSnap.exists() ? docSnap.data() : null;
    };

    const getAllSessions = async (uid) => {
        if (!uid) {
            return [];
        }
        try {
            const sessionsRef = collection(fireStoreDB, "users", uid, "sessions");
            const q = query(sessionsRef, orderBy("timestamp", "desc"));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                return [];
            }
            const sessions = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return sessions;
        } catch (error) {
            console.error("Error fetching all sessions:", error);
            return [];
        }
    };


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
        <DataContext.Provider value={{
                uid,
                setUid,
                user,
                setUser,
                signupUserWithEmailAndPassword,
                putData,
                loginUserWithEmailAndPassword,
                Logout,
                signUpWithGoogle,
                createUserProfileInFirestore,
                isUsernameAvailable,
                verified,
                saveTypingSession,
                getUserProfile,
                getAllSessions
            }}>
            {props.children}
        </DataContext.Provider>
    )
}