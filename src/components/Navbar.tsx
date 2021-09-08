import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
    return (
        <header className="bg-gray-900">
            <div className="section-container">
                <div className="flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact className="nav-link" activeClassName="text-green-400">
                        Tasfia
                    </NavLink>
                    <NavLink to="/post" className="nav-link" activeClassName="text-green-400">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" className="nav-link" activeClassName="text-green-400">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="nav-link" activeClassName="text-green-400">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-6 md:px-3 my-3">
                    <SocialIcon url="https://github.com/TasfiaIslam/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/TasfiaIslam/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/TasfiaIslam/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
