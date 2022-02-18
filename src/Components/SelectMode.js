import React from 'react';
import { Link } from 'react-router-dom';




function SelectMode() {

    const dataLink = [
        {
            link: "/projet-scolaire",
            titre: "Projet Scolaire"
        },
        {
            link: "/projet-perso",
            titre: "Projet Perso"
        },
        {
            link: "/projet-devchallenge",
            titre: "Projet DevChallenges.io"
        },
        {
            link: "/about",
            titre: "About"
        },
    ];

    function gotToTop(e){
        
        window.scrollTo(0,0);
        
    }
    return (



        <div className=" home__select">
            {dataLink.map((titre) => (
                <Link to={titre.link} className="home__selctBox" onClick={gotToTop}>
                    <h2 className="home__title home__title--select">
                        {titre.titre}
                    </h2>
                    <div className="select__box">
                        <p className="home__txt">

                            Voir les projets
                        </p>
                        <svg width="58" height="10" viewBox="0 0 58 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 1.80425C50 1.01881 50.864 0.539969 51.53 0.956249L56.6432 4.152C57.2699 4.54367 57.2699 5.45633 56.6432 5.848L51.53 9.04375C50.864 9.46003 50 8.98119 50 8.19575V1.80425Z" fill="#333333" />
                            <rect y="4" width="51" height="2" rx="1" fill="#333333" />
                        </svg>
                    </div>
                </Link>
            ))}

        </div>
    )
}

export default SelectMode;
