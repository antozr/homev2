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

    var elJSONOverlay = paraFilter.map((el) => (el));
    console.log(elJSONOverlay[0].id);

    function Random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var alpha = Random(0, 11);
    let alphaDif = elJSONOverlay[0].id;
    if (alpha === alphaDif) {
        alpha++;
        console.log(alpha);
    };

    function closeOverlay (){
        /// play anilation to close overplay and after go to de location. Script la fermeture. 
        window.location=(localStorage.getItem('oldPageProject'));
    }



    setTimeout(() => {
        if (elJSONOverlay[0].txt5 === "" || elJSONOverlay[0].txt5 === " ") {
            document.getElementById('txt5').innerHTML = "hello";
            document.getElementById('txt5').style.display = 'none';
        };
        if (elJSONOverlay[0].txt2 === "" || elJSONOverlay[0].txt2 === " ") {
            document.getElementById('txt2').innerHTML = "hello";
            document.getElementById('txt2').style.display = 'none';
        };
    }, 10);

    return (
        <div className='overlay'>
            <div className="overlay__head">
                <button className='overlay__btnHead' onClick={closeOverlay}> 
                    <img src={btnClose} alt="" className="overlay__btnClose" />
                </button>

            </div>
            <HeadPage title={titleOverlay + "☕"} />
            <section className="overlay__sect">
                <h2 className="home__title home__title--2 overlay__title">
                    {elJSONOverlay[0].sousTitre1}
                </h2>
                <p className="project__txt overlay__txt">
                    <span className='overlay__txtSpan'></span>
                    {elJSONOverlay[0].txt1}
                </p>
                <a href="http://#" target="_blank" rel="noopener noreferrer" className="overlay__link">
                    <p>
                        Lire mon analyse
                    </p>
                </a>
                <p className="project__txt overlay__txt">
                    <span className='overlay__txtSpan'></span>
                    {elJSONOverlay[0].txt2}
                </p>
                <img src={Mars} alt="" className="overlay__img" />
            </section>

            <section className="overlay__sect">
                <h2 className="home__title home__title--2 overlay__title">
                    {elJSONOverlay[0].sousTitre2}
                </h2>
                <p className="project__txt overlay__txt">
                    <span className='overlay__txtSpan'></span>
                    {elJSONOverlay[0].txt3}
                </p>
                <p className="project__txt overlay__txt">
                    <span className='overlay__txtSpan'></span>
                    {elJSONOverlay[0].txt4}
                </p>
                <p className="project__txt overlay__txt" id='txt5'>
                    <span className='overlay__txtSpan'></span>
                    {elJSONOverlay[0].txt5}
                </p>
                <img src={Mars} alt="" className="overlay__img" />
            </section>

            <section className="overlay__sect">
                <h2 className="home__title home__title--2 overlay__title">
                    {elJSONOverlay[0].sousTitre3}
                </h2>
                <p className="project__txt overlay__txt">
                    <span className='overlay__txtSpan'></span>
                    {elJSONOverlay[0].txt5}
                </p>
                <a href="http://#" target="_blank" rel="noopener noreferrer" className="overlay__link">
                    <p>
                        Voir la maquette
                    </p>
                </a>
                <a href="http://#" target="_blank" rel="noopener noreferrer" className="overlay__link">
                    <p>
                        Voir le projet
                    </p>
                </a>
            </section>



            <div className="home__cont home__cont--rapide">
                <h2 className="home__title home__title--rapid">
                    Une&nbsp;envie&nbsp;rapide&nbsp;?
                </h2>
                <div className="home__rapidBox">
                    <Card title={dataProjet[alpha].title} tag={dataProjet[alpha].tag[0]} poster={dataProjet[alpha].imgPoster} intro={dataProjet[alpha].intro} page={localStorage.getItem('pageData')} />
                </div>
            </div>

        </div>
    )
}

export default OverlayProjet