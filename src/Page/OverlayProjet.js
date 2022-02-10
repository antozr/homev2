import React from 'react'
import './Overlay.scss';
import HeadPage from '../Components/HeadPage'
import btnClose from '../assets/svg/btn__close.svg';
import { useParams } from 'react-router-dom';
import dataProjet from '../assets/data/projetDataDescription.json';
import Card from '../Components/Card';
import Mars from '../assets/img/mars.jpg'
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
    return (
        <div className='overlay'>
            <div className="overlay__head">
                <img src={btnClose} alt="" className="overlay__btnClose" />
            </div>
            <HeadPage title={titleOverlay + "☕"} />
            hello
            {paraFilter.map((el) => (el.title, el.intro))}


            <section className="overlay__sect">
                <h2 className="home__title home__title--2 home__title--project">
                Rux, d’ou viens-tu ? 
                </h2>
                <p className="project__txt overlay__txt">
                <span className='overlay__txtSpan'></span>
                Ce projets est né à la suite d’une analyse du site du BAM, où nous avons analysé et testé nous ce site et après on à analysé le retour d’expérience d’un de nos testeur, pour en tirer des conclusions sur l’état de fonctionnement du site, sur ces points faible et sur les changement à apporter . 
                </p>
                <a href="http://#" target="_blank" rel="noopener noreferrer" className="overlay__link">
                    <p>
                    Lire mon analyse 
                    </p>
                </a>
                <p className="project__txt overlay__txt">
                    <span className='overlay__txtSpan'></span>
                Après ce point là, le but est d’analyser chaque composant qui sont présent, tous les éléments sont analysé en groupe et on dégage les points à changer sur ceux -ci et les points à changer. 
                </p>
                <img src={Mars} alt="" className="overlay__img" />
            </section>

            <section className="overlay__sect">
                <h2 className="home__title home__title--2 home__title--project">
                Rux, d’ou viens-tu ? 
                </h2>
                <p className="project__txt overlay__txt">
                <span className='overlay__txtSpan'></span>
                Ce projets est né à la suite d’une analyse du site du BAM, où nous avons analysé et testé nous ce site et après on à analysé le retour d’expérience d’un de nos testeur, pour en tirer des conclusions sur l’état de fonctionnement du site, sur ces points faible et sur les changement à apporter . 
                </p>
                <p className="project__txt overlay__txt">
                    <span className='overlay__txtSpan'></span>
                Après ce point là, le but est d’analyser chaque composant qui sont présent, tous les éléments sont analysé en groupe et on dégage les points à changer sur ceux -ci et les points à changer. 
                </p>
                <p className="project__txt overlay__txt">
                    <span className='overlay__txtSpan'></span>
                Après ce point là, le but est d’analyser chaque composant qui sont présent, tous les éléments sont analysé en groupe et on dégage les points à changer sur ceux -ci et les points à changer. 
                </p>
                <img src={Mars} alt="" className="overlay__img" />
            </section>

            <section className="overlay__sect">
                <h2 className="home__title home__title--2 home__title--project">
                Rux, d’ou viens-tu ? 
                </h2>
                <p className="project__txt overlay__txt">
                <span className='overlay__txtSpan'></span>
                Ce projets est né à la suite d’une analyse du site du BAM, où nous avons analysé et testé nous ce site et après on à analysé le retour d’expérience d’un de nos testeur, pour en tirer des conclusions sur l’état de fonctionnement du site, sur ces points faible et sur les changement à apporter . 
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