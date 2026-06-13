import { createContext, useState } from "react";
import {auth} from "../lib/firebase";
import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import firebase from "firebase/compat/app";


export const UserContext = createContext();


export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    
    async function login(email, password) {
        
    }


        async function register(email, password) {
        
    }


        async function logout() {
        
    }

    return(
        <UserContext.Provider 
            value={{ user, login, register, logout }}>
                {children}
        </UserContext.Provider>
    )
};  
