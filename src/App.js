import Menu from './Menu.js';
import './App.css';
import ImageGrid from './ImageGrid';
import FilterBar from './FilterBar.js';
import { useEffect } from 'react';


function App() {
  
  return (
    <div className="App">
      <header>
        <h1>Lariat</h1>
      </header>
      <Menu/>
      {/* <FilterBar /> */}
      <ImageGrid/>
    </div>
  );
}

export default App;
