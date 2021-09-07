import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-yellow-400 text-lg 2xl:text-2xl font-shadow-light font-bold" activeClassName="text-green-400">
                        Tasfia
                    </NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-yellow-400 text-lg 2xl:text-2xl font-shadow-light font-bold" activeClassName="text-green-400">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-yellow-400 text-lg 2xl:text-2xl font-shadow-light font-bold" activeClassName="text-green-400">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-yellow-400 text-lg 2xl:text-2xl font-shadow-light font-bold" activeClassName="text-green-400">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-6 px-3 my-3">
                    <SocialIcon url="https://github.com/TasfiaIslam/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/TasfiaIslam/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/TasfiaIslam/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}

export default Navbar
