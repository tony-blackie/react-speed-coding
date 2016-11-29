import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
    return(
        <nav className="nav">
            <Link className="nav__brand" to="/"><span>ReactSpeed</span>ReactSpeed</Link>
            <Link className="nav__link" activeClassName="nav__link--active" to="/book"><span>Book</span></Link>
            <a
                className="nav__link"
                href="https://github.com/manavsehgal/react-speed-book">Code</a>
            <a
                className="nav__link"
                href="https://manavsehgal.github.io/react-speed-demos/">Demos</a>
            <a className="nav__link" href="https://reactspeed.com">Website</a>
        </nav>
    );
};

export default Nav;