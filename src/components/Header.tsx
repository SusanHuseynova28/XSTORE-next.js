import React from 'react';
import Link from 'next/link'; 

const Header: React.FC = () => {
    return (
        <header className="bg-black w-full py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="text-white font-bold text-2xl">
                        <img className="max-w-[110px] pl-6" src="https://xstore.b-cdn.net/elementor2/nft-crypto/wp-content/uploads/sites/13/2023/08/Logo-2x.png" alt="" />
                    </div>
                    <div className="relative">
                        <button className="absolute right-0 top-0 mt-2 mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 6a4 4 0 100 8 4 4 0 000-8zm12 18l-4.35-4.35"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <nav className="flex space-x-6 text-white">
                    <Link href="#"><span className="text-green-400">Home</span></Link>
                    <Link href="#"><span className="hover:text-gray-300">About us</span></Link>
                    <Link href="#"><span className="hover:text-gray-300">Collections</span></Link>
                    <Link href="#"><span className="hover:text-gray-300">News</span></Link>
                    <Link href="#"><span className="hover:text-gray-300">Contacts</span></Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
                        Get Started
                    </button>
                    <div className="flex space-x-4 items-center text-white">
                        <i className="icon-user"></i>
                        <i className="icon-heart"></i>
                        <i className="icon-cart"></i>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
