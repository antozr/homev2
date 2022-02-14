import React from 'react'
import './Overlay.scss';
import HeadPage from '../Components/HeadPage'
import btnClose from '../assets/svg/btn__close.svg';
import { useParams } from 'react-router-dom';
import dataProjet from '../assets/data/projetDataDescription.json';
import Card from '../Components/Card';
import Mars from '../assets/img/mars.jpg';


function OverlayProjet({ title }) {

    console.log(title);
    const params = useParams();
    console.log(params.id);

    console.log(dataProjet);
    const paraFilter = dataProjet.filter(el => el.title === params.id);
    console.log(paraFilter);
    var titleOverlay = params.id;


    function Random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var alpha = Random(0, 11);

    var elList = paraFilter.map((el) => (el.title, el.intro));
    console.log(elList);

    return (
        <div className='overlay'>
            <div className="overlay__head">
                <img src={btnClose} alt="" className="overlay__btnClose" />
            </div>
            <HeadPage title={titleOverlay + "☕"} />
            hello
            {paraFilter.map((el) => (el.title, el.intro))}


            <section className="overlay__sect">
                <h2 className="home__title home__title--2 overlay__title">
                {paraFilter.map((el) => (el.sousTitre1))}
                </h2>
                <p className="project__txt overlay__txt">
                <span className='overlay__txtSpan'></span>
                {paraFilter.map((el) => (el.txt1))}
                </p>
                <a href="http://#" target="_blank" rel="noopener noreferrer" className="overlay__link">
                    <p>
                    Lire mon analyse 
                    </p>
                </a>
                <p className="project__txt overlay__txt">
                    <span className='overlay__txtSpan'></span>
                    {paraFilter.map((el) => (el.txt2))}
                </p>
                <img src={Mars} alt="" className="overlay__img" />
            </section>

            <section className="overlay__sect">
                <h2 className="home__title home__title--2 overlay__title">
                {paraFilter.map((el) => (el.sousTitre2))} 
                </h2>
                <p className="project__txt overlay__txt">
                <span className='overlay__txtSpan'></span>
                {paraFilter.map((el) => (el.txt3))}
                </p>
                <p className="project__txt overlay__txt">
                    <span className='overlay__txtSpan'></span>
                    {paraFilter.map((el) => (el.txt4))}
                </p>
                <p className="project__txt overlay__txt">
                    <span className='overlay__txtSpan'></span>
                    {paraFilter.map((el) => (el.txt5))}
                </p>
                <img src={Mars} alt="" className="overlay__img" />
            </section>

            <section className="overlay__sect">
                <h2 className="home__title home__title--2 overlay__title">
                {paraFilter.map((el) => (el.sousTitre3))} 
                </h2>
                <p className="project__txt overlay__txt">
                <span className='overlay__txtSpan'></span>
                {paraFilter.map((el) => (el.txt6))}
                </p>
                <a href="http://#" target="_blank" rel="noopener noreferrer" className="overlay__link">
                    <p>
                    Lire mon analyse 
                    </p>
                </a>
                <a href="http://#" target="_blank" rel="noopener noreferrer" className="overlay__link">
                    <p>
                    Lire mon analyse 
                    </p>
                </a>
            </section>



            <div className="home__cont home__cont--rapide">
                <h2 className="home__title home__title--rapid">
                    Une&nbsp;envie&nbsp;rapide&nbsp;?
                </h2>
                <div className="home__rapidBox">
                    <Card title={dataProjet[alpha].title} tag={dataProjet[alpha].tag[0]} poster={dataProjet[alpha].imgPoster} intro={dataProjet[alpha].intro} />
                </div>
            </div>

        </div>
    )
}

export default OverlayProjet