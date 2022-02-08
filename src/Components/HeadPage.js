import React from 'react';

import './HeadPage.scss';

function HeadPage({title}) {
    return (

        <div className="head">
            <h1 className="home__title home__title--big">
                {title}
            </h1>
        </div>
    )
}

export default HeadPage;
