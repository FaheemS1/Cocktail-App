import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-40 bg-black border-b border-white/10 shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/*Logo Image*/}
                        <img
                            src="/src/assets/cocktail-Logo.svg"
                            alt="Cocktail Logo"
                            className="h-13"
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="text-xl font-bold text-white">COCKTAIL</span>
                            <span className="text-xl font-semibold text-white">EXPLORER</span>
                        </div>
                    </a>
                    <div className="flex justify-between items-center h-16">
                        <button className="inline-flex items-center text-white bg-red-600 hover:bg-red-500 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                            FAVOURITE ITEMS
                        </button>
                </div>
                </div>
               
        </nav>
    );
};

export default Navbar;