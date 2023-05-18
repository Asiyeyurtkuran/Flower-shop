import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Heart, MagnifyingGlass } from "phosphor-react";
import "./navbar.css"
import { useState } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Handle logout logic and update the isLoggedIn state
        setIsLoggedIn(false);
    };


    return (
        <div className='navbar'>
            <div className='appName'>
                <Link className='appName' to='/'> Blooming </Link>
            </div>

           

            <div className='links'>
                <ul className='shortcuts'>
                    <li className='searchBttn'>
                        <Link className='searchBttn' to='/search'> <MagnifyingGlass /> </Link>
                    </li>
                    <li className='searchBttn'> 
                        <Link to='/cart'> <ShoppingBag size={32} /> </Link>
                    </li>
                    <li className='searchBttn'> <Link to='/wishList'> <Heart /> </Link></li>
                    <li className='searchBttn'> <Link to='/profile'> <User /> </Link></li>
                    <li className='searchBttn'>
                        {isLoggedIn ? (
                            <button onClick={handleLogout}>Logout</button>
                        ) : (
                            <Link to="/login">Log In</Link>
                        )}
                    </li>

                </ul>

            </div>

        </div>
    )
}

export default Navbar;
