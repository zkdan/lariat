import Button from './Button';
import { useState } from "react";
import { useEffect } from 'react';
import './FilterBar.css'
const FilterBar = ({allYears, chooseYear, chosenYear}) => {
  const years = Array.from(allYears);
  
return(
  <ul className="filterYears">
   {years.map(year =>{
    return <li key={year}>
      <button
      className={year === chosenYear ? 'selected':null}
      value={year} 
      onClick={(e)=> chooseYear(e.target.value)}>{year}</button>
      </li>
   })}
  </ul>
)
}
export default FilterBar;