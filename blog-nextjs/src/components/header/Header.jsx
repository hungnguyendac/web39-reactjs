import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="h-[80px] w-full bg-black">
            <div className="container mx-auto">
                <ul className="flex justify-center items-center h-[80px]">
                    <li>
                        <Link href="/" className="text-white text-[20px] mx-[20px]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white text-[20px] mx-[20px]">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/product" className="text-white text-[20px] mx-[20px]">
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-white text-[20px] mx-[20px]">
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
