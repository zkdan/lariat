import './FilterBar.css'
const FilterBar = ({allYears, chooseYear, chosenYear}) => {
  const years = Array.from(allYears);
  
return(
  <ul className="filterYears">
    <li>
      <button
      tabIndex={1}
      value={null}
      className={chosenYear === '' ? 'selected':null}
      onClick={(e)=> chooseYear(e.target.value)}
    > all</button></li>
   {years.map(year =>{
    return <li key={year}>
      <button
      tabIndex={1}
      className={year === chosenYear ? 'selected':null}
      value={year} 
      onClick={(e)=> chooseYear(e.target.value)}>{year}</button>
      </li>
   })}
  </ul>
)
}
export default FilterBar;