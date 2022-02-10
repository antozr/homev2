import React from 'react';
import HeadPage from '../Components/HeadPage';
import IntroPageProjet from '../Components/IntroPageProjet';
import ListRs from '../Components/ListRS';
import doghat from '../assets/svg/doghat.svg';
import './About.scss';
import dataSkill from '../assets/data/dataSkill.json';
import BoxSkillComponent from '../Components/BoxSkillComponent';

/// importer les svg des icons & recuperer les liens par le front


function About() {


  
  const dataIntro = [
    "Moi en quelque mots",
    "C’est anto aka anto__dev ",
    " , pour l’instant je suis un jeune dans la conception de design et la création de site web / app. J’ai démarré cette aventure en septembre 2020 quand j’ai commencé à suivre les cours en DWM ( DWT) à la HEAJ. Je suis donc un étudiant en web dev / design. ",
    "Je touche",
    " à tout autant à la création de design, d’app (que je réalise parfois après ) et j’aime par dessus tout le coté front-end, appliqué le design dans le code pour le rendre utilisable et fonctionnelle.",
    " Chaque projet",
    " m’avance petit à petit dans ce monde à créer mon univers dans cette galaxy qui est le web 2.0 / 3.0. "

  ];


  return (
    <div className="about">
      <HeadPage title={"About\u00a0☕"} />
      <IntroPageProjet dataIntro={dataIntro} />

      <section className="about__skill">
        <h2 className="home__title home__title--2 home__title--project ">
          Mon skill
        </h2>
        <p className="project__txt">
          <span>
            C’est
          </span>
          &nbsp;valeur représente ce que je sais faire, ce que j’ai déjà utilisé dans les différents domaines qui m’as été donné de voir par moi-même et en cours.
        </p>

        <ul className="about__list">
        {dataSkill.map((el)=>(
          <li className="about__el">
            <BoxSkillComponent imgIcon={el.imageIcon} tag={el.tagName} widtha={el.widthSize} />
          </li>
        ))}
        </ul>
      </section>

      <section className="about__tel">
        <ListRs />
        <img src={doghat} alt="" className="about__img" />
      </section>
    </div>
  )
}

export default About;
