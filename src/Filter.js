import './Filter.css'
const Filter = ({allValues, handleChange, currentValue, type, handleClear}) => {
  const values = Array.from(allValues);
  const isClear = values[values.indexOf('all')];
  handleClear={handleClear}

return(
  <ul className={`${type} filter`}>
   {values.map(value =>{
     
    return <li key={value}>
      <button
      tabIndex={1}
      className={value === currentValue ? 'selected':null}
      value={value} 
      onClick={(e)=> handleChange(e.target.value)}>{value}</button>
      </li>
   })}
  </ul>
)
}
export default Filter;