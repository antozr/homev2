import React, { useState } from 'react';
import HeadPage from '../Components/HeadPage';
import dataProjet from '../assets/data/projetDataDescription.json';
import Card from '../Components/Card';
import HomeTel from '../assets/svg/tel.svg';
import './Project.scss';
import FilterBox from '../Components/FilterBox';
import IntroPageProjet from '../Components/IntroPageProjet';

function ProjetPerso() {
  
    
  var [checkBase, setCheckbase] = useState('true');
  const [dataFilter, setDataFilter] = useState('projet\u00a0perso');
  const [dataLabel, setDataLabel] = useState('all');
  const dataIntro = [
    "Mes projets personnel",
    "Voici ",
    "les différents projets que j'ai réaliser, ça va d'une intégration d'un design de boutique fictive à la création de petit site pour jouer avec des données, recréer des animations ou autres. Tu y retrouveras aussi des clones de projet en react.js et d'autre méthodes utilisé . ",
    "Tu ",
    "verras aussi quelque projet liées à mes cours mais qui ne sont pas forcément demandé par les profs. Et il y a mon premier platformer! 🕹️ ",
    " "
  ];
  /** to convert data tag name in lowerCase for */
  const nameFilter = ["All", "GAME", "CLONE", ""];

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
    let LabelIndex = [labels[0].htmlFor, labels[1].htmlFor, labels[2].htmlFor];
    let labelName = labels[radioNumb].htmlFor;
    let labelNumb = LabelIndex.indexOf(labelName);

    if (labelNumb === 0) {
      setCheckbase(true);
      setDataFilter("projet\u00a0perso");
      console.log(dataFilter);
      setDataLabel(labelName);
    } else if (labelNumb === 1) {
      setCheckbase(false);
      //setDataFilter("js");
      setDataLabel('game');
    } else if (labelNumb === 2) {
      setCheckbase(false);
      //setDataFilter("tfa");
      setDataLabel("clone");
    } /*else if (labelNumb === 3) {
      setCheckbase(false);
      //setDataFilter("2022");
      setDataLabel('2022');
    }*/
    countCard();
    labels.forEach(el => {
      el.classList.remove('filter__label--click');
    });
    labels[labelNumb].classList.add('filter__label--click');
  };

  if (dataLabel === "all") {
    var dataScolaire = dataProjet.filter(el => el.tag[0] === dataFilter);
  } else if (dataLabel === 'js' || dataLabel === "game") {
    var dataScolaire = dataProjet.filter(el => el.tag[0] === dataFilter && el.tag[2] === dataLabel);
  } else if (dataLabel === "js" || dataLabel === "clone") {
    var dataScolaire = dataProjet.filter(el => el.tag[0] === dataFilter && el.tag[1] === dataLabel);
  }

  localStorage.setItem('oldPageProject', window.location.href);
  countCard();

  return (
    <div className="project">
      <HeadPage title={"Projet perso\u00a0👾"} />
      <IntroPageProjet dataIntro={dataIntro} />
      <section className="project__sect">
        <h2 className="home__title home__title--2 home__title--project">
          Les voicis
        </h2>
        <FilterBox clickData={clickData} checkbase={checkBase} dataNameLabel={nameFilter} />

        <ul className="listCard">
          {dataScolaire.map((el) => (
            <li className="listCard__el">
              <Card title={el.title} tag={el.tag[2]} poster={el.imgPoster} intro={el.intro} page={"projet-perso/"} />
            </li>
          ))}
        </ul>
        <img src={HomeTel} alt="" className="home__tel" />
      </section>


    </div>
  )
}

export default ProjetPerso;
