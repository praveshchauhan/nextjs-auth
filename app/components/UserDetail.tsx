"use client";
import { useSession, signIn } from "next-auth/react";
export default function UserDetail() {
    const { data: session } = useSession();
    console.log("session", session);
    if (!session) {
        return (
            <>
                <h1 className="text-3xl font-bold">
                    You are not logged in.
                </h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => signIn()} >
                    Login
                </button>
            </>
        );
    }
    return (
        <h1 className="text-3xl font-bold">
            Hello world!
        </h1>
    );
}