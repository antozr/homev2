import React from 'react';
import SelectMode from '../Components/SelectMode';
import imageMars from '../assets/img/mars.jpeg';
import dataCard from '../assets/data/projetDataDescription.json';
import HomeTel from '../assets/svg/tel.svg';
import './Home.scss';
import '../Components/Card.scss';

import Card from '../Components/Card';

function Home() {

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

    localStorage.setItem('oldPageProject', window.location.href);



    return (
        <div className="home">
            <div className="home__head">
                <h1 className="home__title">
                    Hello <span className='home__title--span'>👋</span> bienvenus dans mon univers
                </h1>
            </div>
            <div className="home__cont">
                <h2 className="home__title home__title--2">
                    Moi c’est anto aka anto_dev
                </h2>
                <p className="home__txt">
                    <span></span> Je suis un étudiant en web dev / design en DWT
                    ( à l’HEAJ ).
                    <br />
                    Tu vas pouvoir retrouver mon portfolio avec mes projets les plus fou comme les plus scolaires, en passant par les bases du web-dev à l’utilisation de framwork  et des petites applications personelle .
                </p>
                <p className="home__title home__title--right">
                    Bonne exploration cher&nbsp;visiteur.
                </p>
                <svg width="354" height="210" viewBox="0 0 354 210" fill="none" xmlns="http://www.w3.org/2000/svg" className='home__decor'>
                    <rect x="1" y="1" width="351.83" height="169.67" rx="5" stroke="black" stroke-width="2" />
                    <path d="M157.25 1.49996H156.75V1.99996C156.75 5.70579 159.754 8.70996 163.46 8.70996L188.3 8.70996C192.006 8.70996 195.01 5.70579 195.01 1.99996V1.49996H194.51L157.25 1.49996Z" stroke="black" />
                    <path d="M12 26.3401C6.20101 26.3401 1.5 31.0411 1.5 36.8401L1.5 118.27C1.5 124.069 6.20101 128.77 12 128.77H341.83C347.629 128.77 352.33 124.069 352.33 118.27V36.8401C352.33 31.0411 347.629 26.3401 341.83 26.3401L12 26.3401Z" fill="#FDFADA" stroke="black" />
                    <path d="M12 133.98C6.20101 133.98 1.5 138.681 1.5 144.48L1.5 164.67C1.5 167.708 3.96243 170.17 7 170.17H71.52C74.5576 170.17 77.02 167.708 77.02 164.67V144.48C77.02 138.681 72.319 133.98 66.52 133.98H12Z" fill="#FABE79" stroke="black" />
                    <path d="M111.36 133.98C105.561 133.98 100.86 138.681 100.86 144.48V164.67C100.86 167.708 103.322 170.17 106.36 170.17H346.83C349.867 170.17 352.33 167.708 352.33 164.67V144.48C352.33 138.681 347.629 133.98 341.83 133.98H111.36Z" fill="#FDFADA" stroke="black" />
                    <path d="M61.6802 171.81C55.605 171.81 50.6802 176.735 50.6802 182.81V203C50.6802 206.314 53.3665 209 56.6802 209H297.15C300.464 209 303.15 206.314 303.15 203V182.81C303.15 176.735 298.225 171.81 292.15 171.81H61.6802Z" stroke="black" stroke-width="2" />
                    <path d="M107.22 179.52C101.421 179.52 96.7202 184.221 96.7202 190.02V197.79C96.7202 200.828 99.1826 203.29 102.22 203.29H251.61C254.648 203.29 257.11 200.828 257.11 197.79V190.02C257.11 184.221 252.409 179.52 246.61 179.52H107.22Z" stroke="black" />
                </svg>

            </div>

            <SelectMode />

            <div className="home__cont home__cont--rapide">
                <h2 className="home__title home__title--rapid">
                    Une&nbsp;envie&nbsp;rapide&nbsp;?
                </h2>
                <div className="home__rapidBox">
                    <Card title={dataCard[alpha].title} tag={dataCard[alpha].tag[0]} poster={dataCard[alpha].imgPoster} intro={dataCard[alpha].intro} page={""} />
                    <Card title={dataCard[alpha2].title} tag={dataCard[alpha2].tag[0]} poster={imageMars} intro={dataCard[alpha2].intro} page={""} />
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
