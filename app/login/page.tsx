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
            <div className="flex flex-col items-center bg-stone-100 rounded-md p-10 pb-20 shadow-md">
                <h1 className="text-lg font-bold">Sign In</h1>
                <GoogleSignInButton />
                <GithubSignInButton />
            </div>
        </div>
    )
}