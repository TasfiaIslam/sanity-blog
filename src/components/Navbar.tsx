import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  return (
    <header className="bg-gray-900">
      <div className="section-container">
        <div className="flex justify-between items-center">
          <nav className="flex space-x-3">
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
          <div className="md:hidden flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="hidden md:inline-flex py-6 md:px-3 my-3 md:pr-0">
            <SocialIcon
              url="https://github.com/TasfiaIslam/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/TasfiaIslam/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/TasfiaIslam/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
