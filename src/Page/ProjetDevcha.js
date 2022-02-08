import React, { useState } from 'react';
import HeadPage from '../Components/HeadPage';
import dataProjet from '../assets/data/projetDataDescription.json';
import Card from '../Components/Card';
import HomeTel from '../assets/svg/tel.svg';
import './Project.scss';
import FilterBox from '../Components/FilterBox';
import IntroPageProjet from '../Components/IntroPageProjet';

function ProjetDevcha() {
  
     
  var [checkBase, setCheckbase] = useState('true');
  const [dataFilter, setDataFilter] = useState('projet\u00a0devchallenge');
  const [dataLabel, setDataLabel] = useState('all');
  const dataIntro = [
    "Mes projets devchallenge.io",
    "Voici ",
    "les différents projets que j'ai fais pour répondre , résoudre les défis proposés par les personnes derrières devchallenge.io. Je voulais réaliser des projets sans devoir passer par la conception du design car ça m'a permit de sortir de ma zone de confort et de pouvoir être confronté à des problématique qui m'était inconnu.",
    "Tu ",
    "trouveras toutes les réponses, les projets que j'ai fais pour répondre au demande des \"utilisateurs\" et aussi des recommandations non-obligatoire. De temps à autre, quand la liberté pouvait être prise, je me suis permis de rajouter des éléments comme les animations sur les menu-hamburger, des petits effets hover, et certaines autre chose, mais tout en respectant le design donné. Vous trouverez donc ici mes projets passant du responsive au front.   ",
    " "
  ];
  /** to convert data tag name in lowerCase for */
  const nameFilter = ["All", "RESPONSIVE", "REACT", ""];

  function countCard() {
    setTimeout(() => {
      var counttxtCard = document.querySelector('.filter__count');
      let cards = document.querySelectorAll('.listCard__el').length;
      counttxtCard.innerText = "+" + cards;
    }, 10);
  };
  console.log(dataFilter);

  function clickData(e) {
    let radioNumb = e.target.value;
    let labels = document.querySelectorAll('.filter__label');
    let LabelIndex = [labels[0].htmlFor, labels[1].htmlFor, labels[2].htmlFor];
    let labelName = labels[radioNumb].htmlFor;
    let labelNumb = LabelIndex.indexOf(labelName);

    if (labelNumb === 0) {
      setCheckbase(true);
      setDataFilter("projet\u00a0devchallenge");
      console.log(dataFilter);
      setDataLabel(labelName);
    } else if (labelNumb === 1) {
      setCheckbase(false);
      //setDataFilter("js");
      setDataLabel('responsive');
    } else if (labelNumb === 2) {
      setCheckbase(false);
      //setDataFilter("tfa");
      setDataLabel("react");
    }/*else if (labelNumb === 3) {
      setCheckbase(false);
      //setDataFilter("tfa");
      setDataLabel("front");
    }*/
    countCard();
    labels.forEach(el => {
      el.classList.remove('filter__label--click');
    });
    labels[labelNumb].classList.add('filter__label--click');
  };

  if (dataLabel === "all") {
    var dataScolaire = dataProjet.filter(el => el.tag[0] === dataFilter);
  } else if (dataLabel === 'js' || dataLabel === "responsive") {
    var dataScolaire = dataProjet.filter(el => el.tag[0] === dataFilter && el.tag[2] === dataLabel);
  } else if (dataLabel === 'js' || dataLabel === "react") {
    var dataScolaire = dataProjet.filter(el => el.tag[0] === dataFilter && el.tag[1] === dataLabel);
  }


  countCard();

  return (
    <div className="project">
      <HeadPage title={"Projet devchallenge.io\u00a0🏆"} />
      <IntroPageProjet dataIntro={dataIntro} />
      <section className="project__sect">
        <h2 className="home__title home__title--2 home__title--project">
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

export default ProjetDevcha;
