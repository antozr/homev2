import React, { useState } from 'react';
import HeadPage from '../Components/HeadPage';
import dataProjet from '../assets/data/projetDataDescription.json';
import Card from '../Components/Card';
import HomeTel from '../assets/svg/tel.svg';
import './Project.scss';
import FilterBox from '../Components/FilterBox';
import IntroPageProjet from '../Components/IntroPageProjet';
function Project() {

  var [checkBase, setCheckbase] = useState('true');
  const [dataFilter, setDataFilter] = useState('projet scolaire');
  const [dataLabel, setDataLabel] = useState('all');
  const dataIntro = [
    "Mes projets à but scolaire",
    "Voici ",
    "les sites que j’ai crée lors de mes cours pour répondre aux défis donné par les profs. Ainsi tu peux voir mes réussites en solo mais aussi les projets plus fun fais avec des potes pour répondre à une problématique.",
    "Tu ",
    "trouveras des projets du premiers que j’ai réaliser à mon TFA ( Travail de Fin d’Année), la plupart de ces réalisations on été fait avec un bundler / package gulp.js et met en avant du HTML / JS /CSS & SCSS et il présente tous un mode responsive.",
    " "
  ];
  /** to convert data tag name in lowerCase for */
  const nameFilter = ["All", "JS", "TFA", "2022"];
  var loweer = nameFilter[0].toLowerCase();

  function countCard() {
    setTimeout(() => {
      var counttxtCard = document.querySelector('.filter__count');
      let cards = document.querySelectorAll('.listCard__el').length;
      counttxtCard.innerText = "+" + cards;
    }, 10);
  };


  function clickData(e) {
    let radioNumb = e.target.value;
    let labels = document.querySelectorAll('.filter__label');
    let LabelIndex = [labels[0].htmlFor, labels[1].htmlFor, labels[2].htmlFor, labels[3].htmlFor];
    let labelName = labels[radioNumb].htmlFor;
    let labelNumb = LabelIndex.indexOf(labelName);

    if (labelNumb === 0) {
      setCheckbase(true);
      setDataFilter("projet scolaire");
      console.log(dataFilter);
      setDataLabel(labelName);
    } else if (labelNumb === 1) {
      setCheckbase(false);
      //setDataFilter("js");
      setDataLabel('js');
    } else if (labelNumb === 2) {
      setCheckbase(false);
      //setDataFilter("tfa");
      setDataLabel("tfa");
    } else if (labelNumb === 3) {
      setCheckbase(false);
      //setDataFilter("2022");
      setDataLabel('2022');

    }
    countCard();
    labels.forEach(el => {
      el.classList.remove('filter__label--click');
    });
    labels[labelNumb].classList.add('filter__label--click');
  };

  if (dataLabel === "all") {
    var dataScolaire = dataProjet.filter(el => el.tag[0] === dataFilter);
  } else if (dataLabel === 'js' || dataLabel === "tfa") {
    var dataScolaire = dataProjet.filter(el => el.tag[0] === dataFilter && el.tag[2] === dataLabel);
  } else if (dataLabel === "2022") {
    var dataScolaire = dataProjet.filter(el => el.tag[0] === dataFilter && el.tag[1] === dataLabel);
  }


  countCard();

  return (
    <div className="project">
      <HeadPage title={"Projet scolaire🎒"} />
      <IntroPageProjet dataIntro={dataIntro} />
      <section className="project__sect">
        <h2 className="home__title home__title--2 home__title--project overlay__title">
          Les voicis
        </h2>
        <FilterBox clickData={clickData} checkbase={checkBase} dataNameLabel={nameFilter} />

        <ul className="listCard">
          {dataScolaire.map((el) => (
            <li className="listCard__el">
              <Card title={el.title} tag={el.tag[2]} poster={el.imgPoster} intro={el.intro} />
            </li>
          ))}
        </ul>
        <img src={HomeTel} alt="" className="home__tel" />
      </section>


    </div>
  )
}
/*
<ul className="filter__list">
          <li className="filter__el">
            <label htmlFor="all" className="filter__label filter__label--click">
              {nameFilter[0]}
            </label>
            <input type="radio" name="alpha" id="all" value="0" onClick={clickData} checked={checkBase} className="filter__item " />
          </li>
          <li className="filter__el" >
            <label htmlFor="js" className="filter__label">
              JS
            </label>
            <input type="radio" name="alpha" id="js" value="1" onClick={clickData} className="filter__item" />

          </li>
          <li className="filter__el">
            <label htmlFor="tfa" className="filter__label">
              TFA
            </label>
            <input type="radio" name="alpha" id="tfa" value="2" onClick={clickData} className="filter__item" />
          </li>
          <li className="filter__el">
            <label htmlFor="2022" className="filter__label">
              2022
            </label>
            <input type="radio" name="alpha" id="2022" value="3" onClick={clickData} className="filter__item" />
          </li>
          <li className="filter__el">
            <p className='filter__count'>
              0
            </p>
          </li>
        </ul>*/
export default Project;
