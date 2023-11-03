import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Matthew J. Montano</h1>
                <nav className="flex space-x-4">
                    <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">
                        About Me
                    </Link>
                    <Link to="/portfolio" className="hover:bg-gray-700 px-3 py-2 rounded">
                        Portfolio
                    </Link>
                    <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">
                        Contact
                    </Link>
                    <Link to="/resume" className="hover:bg-gray-700 px-3 py-2 rounded">
                        Resume
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;

