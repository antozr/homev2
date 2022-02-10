import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';



export default function Card({poster, title, intro, tag, id}) {

    function gotToTop(e){
        e.preventDefault();
        window.scrollTo(0,0);
        console.log(e);
        setTimeout(()=>{
            window.location(e.target.href);
        },100);
    }
    return (
        <div className="card">
            <img src={poster} alt="Voici la représentation de mon projet Mars the new hope" className="card__img" />
            <h2 className="card__title">
                {title}
            </h2>
            <p className="card__txt">
                {intro}
            </p>
            <div className="card__list">
                <li className="card__el">
                    <p className={` ${tag==="projet\u00a0devchallenge" ?  "card__tagTxt card__tagTxt--big" : "card__tagTxt" }`}>
                        {tag}
                    </p>
                </li>
                <li className="card__el" onClick={gotToTop}>
                    <Link to={"/projet-scolaire/"+title} className='card__link' title={title}>
                        see project
                    </Link>
                </li>
            </div>
        </div>
    )
}
