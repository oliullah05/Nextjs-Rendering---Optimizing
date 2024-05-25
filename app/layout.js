
import "./globals.css";

import {Inter} from "next/font/google"
import LocalFont from "next/font/local"
// const inter = Inter({ subsets: ["latin"] });

const font = Inter({
    subsets:["latin"],
    display:"swap",
    weight:["400","700"]
})
export const Myfont = LocalFont({
    src:"../public/font.ttf",
    display:"swap"

})
export const metadata = {
    title: "Rendering",
    description: "Understanding Next.js Rendering process",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={font.className}>
            <body >{children}</body>
        </html>
    );
}
