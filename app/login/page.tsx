import React from "react"
import GoogleSignInButton from "../../components/authButtons"

export default async function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center mt-10 p-10 shadow-md">
                <h1>Sign In</h1>
                <GoogleSignInButton />
            </div>
        </div>
    )
}