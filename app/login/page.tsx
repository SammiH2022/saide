import getServerSession from "next-auth"
import { authConfig } from "@/lib/auth"
import { redirect } from "next/navigation"
import { GoogleSignInButton, GithubSignInButton } from "@/components/authButtons"

export default async function LoginPage() {
    const session = await getServerSession(authConfig)
    console.log("Session: ", session)

    if (session) return redirect("/main")

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center mt-10 p-10 shadow-md">
                <h1 className="text-lg font-bold">Sign In</h1>
                <GoogleSignInButton />
                <GithubSignInButton />
            </div>
        </div>
    )
}