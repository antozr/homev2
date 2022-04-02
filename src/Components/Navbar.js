import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import './AnimationNav.scss';

const Navbar = () => {


    let body = document.querySelector('body');

    function openMenu() {
        let nav = document.querySelector('.navbar__list');
        let btnNav = document.querySelectorAll('.navbar__btnBox');
        let elTitle = document.querySelectorAll('.navbar__link');
        let btnFixe = document.querySelector('.navbar__btn');
        console.log('hello2');


        if (nav.classList.contains('navbar__list--actif')) {

            nav.classList.remove('navbar__list--actif');
            nav.classList.add('navbar__list--anim');

            elTitle.forEach(el => {
                el.classList.remove("navbar__link--anim")
            });
            btnNav.forEach(el => {
                el.classList.remove('navbar__btnBox--open')
            });
            btnFixe.classList.remove('navbar__btn--open');
            nav.classList.remove('navbar__list--actif')
            setTimeout(() => {
                body.style.overflowY = "scroll";
                nav.classList.remove('navbar__list--anim')
            }, 550);
            body.style.overflowY = "scroll";


            console.log('hello');
            
        } else {
            btnFixe.classList.add('navbar__btn--open');
            nav.classList.add('navbar__list--actif')
            setTimeout(() => {
                elTitle.forEach(el => {
                    el.classList.add("navbar__link--anim")
                });
            }, 600);
            btnNav.forEach(el => {
                el.classList.add('navbar__btnBox--open')
            });
            body.style.overflowY = "hidden";


        }
    }

    function clickLink() {
        let nav = document.querySelector('.navbar__list');
        let btnNav = document.querySelectorAll('.navbar__btnBox');
        let elTitle = document.querySelectorAll('.navbar__link');
        let btnFixe = document.querySelector('.navbar__btn');


        nav.classList.remove('navbar__list--actif');
        nav.classList.add('navbar__list--anim');
        elTitle.forEach(el => {
            el.classList.remove("navbar__link--anim")
        });
        btnNav.forEach(el => {
            el.classList.remove('navbar__btnBox--open')
        });
        btnFixe.classList.remove('navbar__btn--open');
        nav.classList.remove('navbar__list--actif')
        setTimeout(() => {

            nav.classList.remove('navbar__list--anim')
        }, 550);
        body.style.overflowY="scroll";
    }


    return (
        <div className="navbar">
            <Link to={'/'} className="navbar__title">
                anto__dev
            </Link>

            <nav className="navbar__nav">

                <ul className="navbar__list ">
                    <li className="navbar__el" onClick={clickLink}>
                        <Link to={'/'} className='navbar__link navbar__link--1 ' >
                            Home
                        </Link>
                        <p className="navbar__txt">
                            Bonjour
                        </p>
                    </li>
                    <li className="navbar__el" onClick={clickLink}>
                        <Link to={'/projet-scolaire'} className='navbar__link navbar__link--2'>
                            Projet scolaire
                        </Link>
                        <p className="navbar__txt">
                            Regarde les projets
                        </p>
                    </li>
                    <li className="navbar__el" onClick={clickLink}>
                        <Link to={'/projet-perso'} className='navbar__link navbar__link--3'>
                            Projet perso
                        </Link>
                        <p className="navbar__txt">
                            Regarde les projets
                        </p>
                    </li>
                    <li className="navbar__el" onClick={clickLink}>
                        <Link to={'/projet-devchalenge'} className='navbar__link navbar__link--4'>
                            Projet Devchalenge.io
                        </Link>
                        <p className="navbar__txt">
                            Regarde les projets
                        </p>
                    </li>
                    <li className="navbar__el" onClick={clickLink}>
                        <Link to={'/about'} className='navbar__link navbar__link--5'>
                            About
                        </Link>
                        <p className="navbar__txt">
                            Regarde mon skill
                        </p>
                    </li>
                </ul>
            </nav>
            <button className="navbar__btn" onClick={openMenu}>
                <span className="navbar__btnBox"></span>
                <span className="navbar__btnBox"></span>
                <span className="navbar__btnBox"></span>
            </button>
        </div>
    )
}

export default Navbar;
