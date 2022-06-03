import React from 'react';
import './header.scss';
import СurrentСourseContainer from "../СurrentСourseContainer/СurrentСourseContainer";

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header--logo'>$$$</h1>
            <СurrentСourseContainer />
        </header>
    );
};

export default Header;