import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';


const Navbar = () => {




    function openMenu() {
        let nav = document.querySelector('.navbar__list');
        let btnNav = document.querySelectorAll('.navbar__btnBox');
        console.log('hello2');
        if (nav.classList.contains('navbar__list--actif')) {
            nav.classList.remove('navbar__list--actif');
            nav.classList.add('navbar__list--anim');


            setTimeout(() => {
                nav.classList.remove('navbar__list--actif')
                btnNav.forEach(el => {
                    el.classList.remove('navbar__btnBox--open')
                });
                nav.classList.remove('navbar__list--anim')
            }, 300);

            console.log('hello');
        } else {
            nav.classList.add('navbar__list--actif')
            btnNav.forEach(el => {
                el.classList.add('navbar__btnBox--open')
            });
        }
    }

    function clickLink() {
        let btnNav = document.querySelectorAll('.navbar__btnBox');
        let nav = document.querySelector('.navbar__list');
        nav.classList.remove('navbar__list--actif');
        nav.classList.add('navbar__list--anim');


        setTimeout(() => {
            nav.classList.remove('navbar__list--actif')
            btnNav.forEach(el => {
                el.classList.remove('navbar__btnBox--open')
            });

            nav.classList.remove('navbar__list--anim')
        }, 300);
    }
    return (
        <div className="navbar">
            <p className="navbar__title">
                anto__dev
            </p>

            <nav className="navbar__nav">

                <ul className="navbar__list ">
                    <li className="navbar__el" onClick={clickLink}>
                        <Link to={'/'} className='navbar__link' >
                            Home
                        </Link>
                    </li>
                    <li className="navbar__el" onClick={clickLink}>
                        <Link to={'/'} className='navbar__link'>
                            Projet scolaire
                        </Link>
                    </li>
                    <li className="navbar__el" onClick={clickLink}>
                        <Link to={'/'} className='navbar__link'>
                            Projet Devchalenge.io
                        </Link>
                    </li>
                    <li className="navbar__el" onClick={clickLink}>
                        <Link to={'/'} className='navbar__link'>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="navbar__btn" onClick={openMenu}>
                <div className="navbar__btnBox"></div>
                <div className="navbar__btnBox"></div>
                <div className="navbar__btnBox"></div>
            </div>
        </div>
    )
}

export default Navbar;
