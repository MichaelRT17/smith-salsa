import React from 'react';
import logo from '../images/nachos (1).png';
import DrawButton from './DrawButton';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return (
        <div className='main-header-properties'>
            <Link to='/'>
                <img src={logo} alt='nacho icon' className='main-nacho-icon' />
            </Link>
            <h1>Salsa</h1>
            <DrawButton buttonName='Order'/>
        </div> 
    )
}

export default Header;