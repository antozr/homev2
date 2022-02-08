import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import ListRS from './ListRS';
function Footer() {

    function gotToTop(e){
        
        window.scrollTo(0,0);
        console.log(e);
        let hrefData = e.target.href;
        window.location(hrefData);
            console.log(e.target.href);
    }

    return (

        <footer className="foot">
            <h2 className="home__title home__title--foot">
                Merci d’être passé ^^
            </h2>
            <ul className="foot__list">
                <li className="foot__el">
                    <Link to={'/'} className="foot__navLink" onClick={gotToTop}>
                        Home
                    </Link>
                </li>
                <li className="foot__el">
                    <Link to={'/projet-scolaire'} className="foot__navLink" onClick={gotToTop}>
                        Projet scolaire
                    </Link>
                </li>
                <li className="foot__el">
                    <Link to={'/projet-perso'} className="foot__navLink" onClick={gotToTop}>
                        Projet perso
                    </Link>
                </li>
                <li className="foot__el">
                    <Link to={'/projet-devchalenge'} className="foot__navLink" onClick={gotToTop}>
                        Project devchallenges.io
                    </Link>
                </li>
                <li className="foot__el">
                    <Link to={'/about'} className="foot__navLink" onClick={gotToTop}>
                        About
                    </Link>
                </li>
                <li className="foot__el">
                    <Link to={'/credit'} className="foot__navLink" onClick={gotToTop}>
                        Crédit
                    </Link>
                </li>
            </ul>

            <div className="foot__rs">
                <ListRS />
                
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
                    anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_devanto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev
                </p>
                <p className="foot__txtAnim">
                    anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_devanto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev
                </p>
                <p className="foot__txtAnim foot__txtAnim--reverse">
                    anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_devanto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev anto_dev
                </p>
            </div>
        </footer>
    );
}

export default Footer;
