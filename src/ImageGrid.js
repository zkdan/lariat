
import { useEffect, useState, useReducer } from "react";
import ImageCard from "./ImageCard";
import FilterBar from "./FilterBar";
import getMonth from "./utils.js"
import "./ImageGrid.css";

const  ImageGrid = () =>{
  const [allPhotos, setAllPhotos] = useState([]);
  const [allYears, setAllYears] = useState([]);
  const [chosenYear, chooseYear] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  const getAllYears = (data) => {
    const years = new Set();
    data.forEach(item=>{
      years.add(item.year);
    })
    setAllYears(years);
    setFilteredPhotos([]);
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
      setAllPhotos(data);
      getAllYears(data);
      chooseYear('');
      setFilteredPhotos(data);
    });
  },[]);
  useEffect(()=>{

    if(chosenYear === ''){
      setFilteredPhotos(allPhotos);
    } else {
      const filtered = allPhotos.filter(photo=>{
        return photo.year === chosenYear;
      });
      setFilteredPhotos(filtered);
    }
  },[chosenYear]);


  return(
    <main>
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