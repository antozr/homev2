import React from 'react';
function FilterBox({clickData, checkBase, dataNameLabel}) {

  
  return(

    <ul className="filter__list">
          <li className="filter__el">
            <label htmlFor="all" className="filter__label filter__label--click">
              {dataNameLabel[0]}
            </label>
            <input type="radio" name="alpha" id="all" value="0" onClick={clickData} checked={checkBase} className="filter__item " />
          </li>
          <li className="filter__el" >
            <label htmlFor="js" className="filter__label">
            {dataNameLabel[1]}
            </label>
            <input type="radio" name="alpha" id="js" value="1" onClick={clickData} className="filter__item" />

          </li>
          <li className="filter__el">
            <label htmlFor="tfa" className="filter__label">
            {dataNameLabel[2]}
            </label>
            <input type="radio" name="alpha" id="tfa" value="2" onClick={clickData} className="filter__item" />
          </li>
         {dataNameLabel[3]==="" ? " " :  <li className="filter__el">
            <label htmlFor="2022" className="filter__label">
            {dataNameLabel[3]}
            </label>
            <input type="radio" name="alpha" id="2022" value="3" onClick={clickData} className="filter__item" />
          </li>}
          <li className="filter__el">
            <p className='filter__count'>
              0
            </p>
          </li>
        </ul>
  )
}

export default FilterBox;
