import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Head from "@/components/seo/Head";
import Navigation from "@/components/header/Navigation";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "NextJS buổi 16 (Chắc thế)",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head/>
            <body className={inter.className}>
                <Navigation/>
                {children}
                <Footer/>
            </body>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" async></script>
        </html>
    );
}