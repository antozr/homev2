import React from 'react';

function IntroPageProjet({dataIntro}) {
    return (
        <section className="project__sect project__sect--grid">
            <h2 className="home__title home__title--2 home__title--project home__title--noMarge h1">
                {dataIntro[0]}
            </h2>
            <p className="project__txt project__txt--txtNoSpan  project__txt--noneMarge p1">
                <span>
                {dataIntro[1]}
                </span>
                {dataIntro[2]}
            </p>
            <p className="project__txt project__txt--noneMarge  project__txt--txtNoSpan  p2">
                <span>
                {dataIntro[3]}
                </span>
                {dataIntro[4]}
            </p>
            <p className={dataIntro[5]===' ' ? "project__txt--none" : "project__txt project__txt--noneMarge  project__txt--txtNoSpan  project__txt--italic d1"}>
                <span>
                {dataIntro[5]}
                </span>
                {dataIntro[6]}
            </p>
        </section>
    )
}

export default IntroPageProjet;
