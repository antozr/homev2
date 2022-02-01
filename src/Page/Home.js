import React from 'react';
import SelectMode from '../Components/SelectMode';
import imageMars from '../assets/img/mars.png';

import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div className="home__head">
                <h1 className="home__title">
                    Hello 👋 bienvenus dans mon univers
                </h1>
            </div>
            <div className="home__cont">
                <h2 className="home__title home__title--2">
                    Moi c’est anto aka anto_dev
                </h2>
                <p className="home__txt">
                    Je suis un étudiant en web dev / design en DWT
                    ( à l’HEAJ ).
                    <br />
                    Tu vas pouvoir retrouver mon portfolio avec mes projets les plus fou comme les plus scolaires, en passant par les bases du web-dev à l’utilisation de framwork  et des petites applications personelle .
                </p>
                <p className="home__title home__title--right">
                    Bonne exploration cher&nbsp;visiteur.
                </p>
            </div>

            <SelectMode />

            <div className="home__cont home__cont--rapide">
                <h2 className="home__title home__title--rapid">
                    Une envie rapide ?
                </h2>
                <div className="home__rapidBox">
                    <div className="card">
                        <img src={imageMars} alt="Voici la représentation de mon projet Mars the new hope" className="card__img" />
                        <h2 className="card__title">
                        Mars, the new hope
                        </h2>
                        <p className="card__txt">
                        Une page de présentation de la planète rouge, avec ses engins spaciaux humains envoyés des quatres coins du monde. Ainsi on peut voir tout ce qu’il s’y passe ainsi qu’un joli roover.
                        </p>
                        <div className="card__list">
                            <li className="card__el">
                                <p className="card__tagTxt">
                                    projet perso 
                                </p>
                            </li>
                            <li className="card__el">
                                <Link to={"/"} className='card__link'>
                                    see project
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// data to json 
/*{
    "id": 0,
    "Key":0,
    "tag":["", " "],
    "imgPoster" : "",
    "title" :"",
    "intro" :" "

}*/
export default Home;
