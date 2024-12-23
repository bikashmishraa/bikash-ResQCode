'use client'
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {auth,googleProvider} from "../../../lib/configure/firebase.config"
import {createUserWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
// import {signOut} from 'firebase/auth'
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();
    console.log(auth?.currentUser?.email)
    console.log(auth?.currentUser?.password)

    const signIn = async(e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth,email,password)
            router.push('/');
            // if (!auth.currentUser) {
            //     return (
            //         // h1
            //     )
            // }
        } catch (error) {
            throw new Error('unable to find user form username and password',error)
        }
        setEmail("")
        setPassword("")
    }
    const signInWithGoogle = async() => {
        try {
            await signInWithPopup(auth,googleProvider)
            router.push('/');
        } catch (error) {
            throw new Error('unable to find user form username and password',error)
        }
    }
    // const signout = async() => {
    //     try {
    //         await signOut(auth)
    //     } catch (error) {
    //         throw error('unable to find user form username and password')
    //     }
    // }

    return (
        <div className="w-full items-center flex justify-center bg-[url('/bg_login.png')] bg-cover bg-center h-screen">
            <div className="flex flex-col gap-4 border p-4 rounded-xl bg-[#DAE7DD]">
                <h1 className="text-3xl text-blue-500">Login</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className=" bg-green-500" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                {/* <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Username" />
                </label> */}
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" placeholder="*****" className="grow" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                {/* <label className="input input-bordered flex items-center gap-2">
                    <Image src="/phone.svg"  width={20} height={20} alt="phone" />
                    <input type="number" className="grow" placeholder="Phone Number" />
                </label> */}

                    <div className="text-black text-sm flex justify-between">
                <h2 >New user? </h2>
                <h2>Create an account <Link href={"/register"}>🔗</Link></h2>
                </div>
                <button className="btn bg-blue-500 hover:bg-green-600 text-white" onClick={signIn}>SignIn</button>
                <button className="btn bg-blue-500 hover:bg-green-600 text-white" onClick={signInWithGoogle}>SignInWithGoogle</button>
            </div>

        </div>
    )
}