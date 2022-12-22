import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="h-[55px] flex justify-between items-center px-5 py-2 bg-gray-500 text-white">
      <span className="font-bold">React course 2022</span>
      <span>
        <Link className='mr-2' to="/">Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
}
