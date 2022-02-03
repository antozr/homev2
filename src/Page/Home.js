import React from 'react';
import SelectMode from '../Components/SelectMode';
import imageMars from '../assets/img/mars.png';
import dataCard from '../assets/data/projetDataDescription.json';
import HomeTel from '../assets/svg/tel.svg';
import './Home.scss';
import '../Components/Card.scss';
import { Link } from 'react-router-dom';

function Home() {

    var alpha ;
    function Random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
      };

      alpha = Random(0, 11);
     var alpha2 = Random(0, 11);
      console.log(alpha)
      console.log(alpha2)


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
                    Une&nbsp;envie&nbsp;rapide&nbsp;?
                </h2>
                <div className="home__rapidBox">
                    <div className="card">
                        <img src={imageMars} alt="Voici la représentation de mon projet Mars the new hope" className="card__img" />
                        <h2 className="card__title">
                        {dataCard[alpha].title}
                        </h2>
                        <p className="card__txt">
                        {dataCard[alpha].intro}
                        </p>
                        <div className="card__list">
                            <li className="card__el">
                                <p className="card__tagTxt">
                                    {dataCard[alpha].tag[1]}
                                </p>
                            </li>
                            <li className="card__el">
                                <Link to={"/"} className='card__link'>
                                    see project
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className="card">
                        <img src={imageMars} alt="Voici la représentation de mon projet Mars the new hope" className="card__img" />
                        <h2 className="card__title">
                        {dataCard[alpha2].title}
                        </h2>
                        <p className="card__txt">
                        {dataCard[alpha2].intro}
                        </p>
                        <div className="card__list">
                            <li className="card__el">
                                <p className="card__tagTxt">
                                    {dataCard[alpha2].tag[0]}
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

            <img src={HomeTel} alt="" className="home__tel" />
            
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
