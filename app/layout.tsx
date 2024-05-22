import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Super Awesome IDE',
    description: 'A Collaborative Online IDE',
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}
