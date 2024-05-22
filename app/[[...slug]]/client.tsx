'use client'
import React from 'react'
import Link from 'next/link'

export function ClientOnly() {
    return (
        <div className="h-screen flex flex-col justify-center gap-y-8 place-items-center">
            <h1 className="font-sans font-semibold text-5xl bold mb-10">
                Super Awesome IDE
            </h1>
            <div className="flex flex-row gap-x-2">
                <Link
                    className="btn btn-primary"
                    href="/login"
                >
                    Login
                </Link>
                <Link
                    className="btn"
                    href="editor"
                >
                    Guest
                </Link>
            </div>
        </div>
    );
}
