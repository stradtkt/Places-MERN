import React from 'react';
import {Link} from 'react-router-dom';

import './MainNav.css'
import MainHeader from './MainHeader';

const MainNav = props => {
    return <MainHeader>
        <button className="main-navigation__menu-btn">
            <span/>
            <span/>
            <span/>
        </button>
        <h1 className="main-navigation__title">
            <Link to="/">Places</Link>
        </h1>
        <nav>

        </nav>
    </MainHeader>
};

export default MainNav;