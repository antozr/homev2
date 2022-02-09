import React from 'react';

function BoxSkillComponent({tag , widtha, imgIcon}) {

    var alpha = {width: "60%", margin: '20px'};
    console.log(alpha);
    return (
        <div className="about__skillItem">
            <div className="about__imgBox">
                <img src={imgIcon} alt="" className="about__icon" />
            </div>
            <div className="about__skillContent">
                <p className="home__txt">
                   {tag}
                </p>
                <div className="about__box">
                    <div className="about__inbox" style={{width:widtha}} id="inbox" >

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxSkillComponent;
