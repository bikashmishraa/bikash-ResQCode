"use client"
import {auth,googleProvider} from "@/lib/configure/firebase.config"
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'
// import { GoogleAuthProvider } from "firebase/auth/web-extension"
import { useState } from 'react'
export default function Auth(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(auth?.currentUser?.email)

    const signIn = async(e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth,email,password)
        } catch (error) {
            throw error('unable to find user form username and password')
        }
        setEmail("")
        setPassword("")
    }
    const signInWithGoogle = async() => {
        try {
            await signInWithPopup(auth,googleProvider)
        } catch (error) {
            throw new Error('unable to find user form username and password')
        }
    }
    const signout = async() => {
        try {
            await signOut(auth)
        } catch (error) {
            throw error('unable to find user form username and password')
        }
    }
    return(
            
        <div>
            <form action="">
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                }}/>
                <button type="submit" className="bg-green-500" onClick={signIn}>Submit</button>
                <button onClick={signInWithGoogle}>Sign in with google</button>
                <button onClick={signout}>SignOut</button>
            </form>
        </div>
    )
}