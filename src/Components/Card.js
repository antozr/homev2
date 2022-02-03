import React from 'react';
import imageMars from '../assets/img/mars.png';
import dataCard from '../assets/data/projetDataDescription.json';
import { Link } from 'react-router-dom';
import './Card.scss';



export default function Card() {

    var alpha;
    function Random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    alpha = Random(0, 11);
    var alpha2 = Random(0, 11);
    console.log(alpha)
    console.log(alpha2)




    return (
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
    )
}
