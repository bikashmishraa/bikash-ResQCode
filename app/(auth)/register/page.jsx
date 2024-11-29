"use client";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../lib/configure/firebase.config"; // Ensure this path is correct
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../lib/configure/firebase.config"; // Firestore instance
import { useRouter } from "next/navigation";

export default function Register() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [data, setData] = useState({
        email: "",
        password: "",
        username: "",
        phone: ""
    });
    
    const handleData = (value, field) => {
        if (field === "phone") {
            const filteredValue = value.replace(/[^0-9+\-()\s]/g, ""); // Allow only valid characters
            setData({ ...data, [field]: filteredValue });
        } else {
            setData({ ...data, [field]: value });
        }
    };

    const sendtoFirebase = async () => {
        const { email, password, username, phone } = data;
        try {
            // Save user to Firebase Authentication
            loading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Save additional data to Firestore
            const userCollection = collection(db, "resqcode"); // Replace "users" with your collection name
            await addDoc(userCollection, {
                email,
                username,
                phone,
                uid: userCredential.user.uid,
            });

            console.log("User registered successfully!");
            loading(false);
            router.push('/')
            
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };


        const getData = async () => {
            try {
                const data = await getDocs(collection(db, "resqcode"));
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id:doc.id,
                }));
                console.log(filteredData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        const signout = async () => {
            try {
                await signOut(auth);
                console.log("User signed out successfully.");
            } catch (error) {
                console.error("Error signing out:", error);
            }
        };

    return (
        <div className="w-full flex justify-center items-center bg-[url('/bg_login.png')] bg-cover bg-center h-screen">
            <div className="flex flex-col gap-4 border p-4 rounded-xl bg-[#DAE7DD]">
                <h1 className="text-3xl text-blue-500">Register</h1>

                {/* Email Input */}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => handleData(e.target.value, "email")}
                    />
                </label>

                {/* Username Input */}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Username"
                        value={data.username}
                        onChange={(e) => handleData(e.target.value, "username")}
                    />
                </label>

                {/* Password Input */}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="password"
                        className="grow"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => handleData(e.target.value, "password")}
                    />
                </label>

                {/* Phone Number Input */}
                <label className="input input-bordered flex items-center gap-2">
                    <Image src="/phone.svg" width={20} height={20} alt="phone" />
                    <input
                        type="tel"
                        className="grow"
                        placeholder="Phone Number"
                        value={data.phone}
                        onChange={(e) => handleData(e.target.value, "phone")}
                    />
                </label>

                <h2 className="text-sm text-black">
                    Already have an account? <Link href={"/login"}>Login</Link>
                </h2>
                <button
                    className="btn bg-blue-500 text-white hover:bg-green-600"
                    onClick={sendtoFirebase}>
                    Register
                </button>
            </div>
        </div>
    );
}
