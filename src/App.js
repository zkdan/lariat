import './App.css';
import { useState } from 'react';
import ImageGrid from './ImageGrid';


const App =()=>{
  const [color, setColor] = useState([true]);
const toggle =()=>{
  setColor(!color);
}  
  return (
    <div className={`App ${color ? '' : 'grayscale'}`} >
      <button tabIndex={1} className='toggle'
      onClick={toggle}></button>
      <header>
        <h1>lariat</h1>
      </header>
      <ImageGrid/>
    </div>
  );
} 

export default App;
