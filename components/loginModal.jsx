"use client";
import getServerSession from "next-auth"
import { authConfig } from "@/lib/auth"
import { redirect } from "next/navigation"
import { GoogleSignInButton, GithubSignInButton } from "./authButtons"

import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";

export default async function LoginModal() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    // // if successfully authenticated, redirect to main page
    // const session = await getServerSession(authConfig)
    // console.log("Session: ", session)
    // if (session) return redirect("/main")

    return (
        <>
            {modal &&
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-white m-auto p-8 rounded-md">
                    <div className="flex flex-col items-center">
                        <h1 className="text-lg font-bold">Sign In</h1>
                        <GoogleSignInButton />
                        <GithubSignInButton />
                        <Link href={pathname} className="mt-5">
                            <button
                                className="bg-transparent border-gray-700 hover:bg-red-600 hover:text-white hover:border-transparent text-red-600 py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                        </Link>
                    </div>
                </div>
            </dialog>
            }
        </>
    );
}