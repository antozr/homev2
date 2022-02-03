import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
function Footer() {


    return (

        <footer className="foot">
            <h2 className="home__title home__title--foot">
                Merci d’être passé ^^
            </h2>
            <ul className="foot__list">
                <li className="foot__el">
                    <Link to={'/'} className="foot__navLink">
                        Home
                    </Link>
                </li>
                <li className="foot__el">
                    <Link to={'/projet-scolaire'} className="foot__navLink">
                        Projet scolaire
                    </Link>
                </li>
                <li className="foot__el">
                    <Link to={'/projet-perso'} className="foot__navLink">
                        Projet perso
                    </Link>
                </li>
                <li className="foot__el">
                    <Link to={'/projet-devchallenges'} className="foot__navLink">
                        Project devchallenges.io
                    </Link>
                </li>
                <li className="foot__el">
                    <Link to={'/about'} className="foot__navLink">
                        About
                    </Link>
                </li>
                <li className="foot__el">
                    <Link to={'/credit'} className="foot__navLink">
                        Crédit
                    </Link>
                </li>
            </ul>

            <div className="foot__rs">
                <h2 className="home__title home__title--rs">
                    Mes réseaux
                </h2>
                <ul className="foot__list foot__list--rs">
                    <li className="foot__el">
                        <a href='https://www.instagram.com/anto__dev/' target={"_blank"} className='foot__navLink foot__navLink--rs' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            <p className="foot__txtRs">
                                Instagram
                            </p>
                        </a>
                    </li>
                    <li className="foot__el">
                        <a href='https://www.behance.net/anto__dev' target={"_blank"} className='foot__navLink foot__navLink--rs' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" /></svg>

                            <p className="foot__txtRs">
                                Béhance
                            </p>
                        </a>
                    </li>

                    <li className="foot__el foot__el--mail">
                        <Link to={'#'} onClick={() => window.location = 'mailto:antonidwm@gmail.com?subject=Mail pour un projet '} className='foot__navLink foot__navLink--rs'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" /></svg>

                            antonidwm@gmail.com
                        </Link>
                    </li>
                    <li className="foot__el">
                        <a href='https://twitter.com/AntoniDumont' target={"_blank"} className='foot__navLink foot__navLink--rs' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            <p className="foot__txtRs">
                                Twitter
                            </p>
                        </a>
                    </li>
                    <li className="foot__el ">
                        <a href='https://github.com/antozr' target={"_blank"} className='foot__navLink foot__navLink--rs' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            <p className="foot__txtRs">
                                GitHub
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="foot__anim">
                <p className="foot__txtAnim">
                    <span>
                        anto_dev
                    </span>
                    <span>
                        anto_dev
                    </span>
                    <span>
                        anto_dev
                    </span>
                    <span>
                        anto_dev
                    </span>
                    <span>
                        anto_dev
                    </span>
                    <span>
                        anto_dev
                    </span>
                    <span>
                        anto_dev
                    </span>
                    <span>
                        anto_dev
                    </span>
                </p>
                <p className="foot__txtAnim foot__txtAnim--reverse">
                    anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev
                </p>
                <p className="foot__txtAnim">
                    anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev
                </p>
                <p className="foot__txtAnim foot__txtAnim--reverse">
                    anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev
                </p>
            </div>
        </footer>
    );
}

export default Footer;
