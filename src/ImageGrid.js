
import { useEffect, useState, useReducer } from "react";
import ImageCard from "./ImageCard";
import FilterBar from "./FilterBar";
import getMonth from "./utils.js"
import "./ImageGrid.css";

const reducer =(state, action)=>{
  console.log(state, action)
}
const  ImageGrid = () =>{
  const [allPhotos, setAllPhotos] = useState([]);
  const [allYears, setAllYears] = useState([]);
  const [chosenYear, chooseYear] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  const getAllYears = (data) => {
    let years = new Set();
    data.forEach(item=>{
      years.add(item.year);
    })
    years = Array.from(years);
    setAllYears(years);
    setFilteredPhotos({filteredPhotos:[]});
  }

  useEffect(()=>{
    fetch('https://storage.googleapis.com/storage/v1/b/lariat-images/o/')
    .then(res=> res.json())
    .then(res => {
      const data = res.items.map(item => {
        const baseUrl = `https://storage.googleapis.com/`;
        const month = getMonth(item.name.slice(5,7));
        const year = item.name.slice(0,4);
        const name = item.name;
        const trimPoint = item.id.lastIndexOf('/');
        const imageUrl = `${baseUrl}${item.id.slice(0,trimPoint)}`;
        const photoSpecs = {
          imageUrl,
          name,
          id:item.generation,
          month,
          year
        }
        return photoSpecs;
      });
      setAllPhotos({allPhotos:data});
      getAllYears(data);
      chooseYear({year:''});
      setFilteredPhotos(data);
    });
  },[]);
  // useEffect(()=>{
  //   if(chosenYear === ''){
  //     setFilteredPhotos(allPhotos);
  //   } else {
  //     const filtered = allPhotos.filter(photo=>{
  //       return photo.year === chosenYear;
  //     });
  //     setFilteredPhotos(filtered);
  //   }
  // },[chosenYear]);

  const [state,dispatch] = useReducer(reducer, []);

  const handleUpdateMonth =(e)=>{
    const val = e.target.textContent;
    console.log(val)
    dispatch({
      month:val
    })
  }
  return(
    <main>
      <ul>
        <li onClick={handleUpdateMonth}>Mar</li>
        <li onClick={handleUpdateMonth}>Jun</li>
        <li onClick={handleUpdateMonth}>Aug</li>
      </ul>
      <FilterBar allYears ={allYears} chooseYear={chooseYear} chosenYear={chosenYear}/>
      <section>
        {filteredPhotos.map(photo => {
        return <ImageCard key={photo.id}cardInfo={photo} />
      })}
      </section>
    </main>
  )
  }
  
  export default ImageGrid;