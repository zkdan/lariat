
import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import Filter from "./Filter";
import getMonth from "./utils.js"
import "./ImageGrid.css";

const monthFilters = ['Cover','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const  ImageGrid = () =>{
  const [allPhotos, setAllPhotos] = useState([]);
  const [allYears, setAllYears] = useState([]);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  const getAllYears = (data) => {
    let years = new Set();
    data.forEach(item=> {
      years.add(item.year);
    })
    years = Array.from(years);
    setAllYears(years);
  }

  useEffect(()=>{
    fetch('https://storage.googleapis.com/storage/v1/b/lariat-images/o/')
    .then(res=> res.json())
    .then(res => {
      const data = res.items.filter(item => item.name.includes('thumb')).map(item => {
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
    });
  },[]);

  const handleUpdateYear = (newYear)=>{
    if(year === newYear){
      setYear(null);
    } else {
      setYear(newYear);
    }
  }
  const handleUpdateMonth =(newMonth)=>{
    if(month === newMonth){
      setMonth(null);
    } else {
      setMonth(newMonth);
    }
  }
  return(
    <main>
      <Filter
        type={'year'} 
        allValues ={allYears} 
        handleChange={handleUpdateYear} 
        currentValue={year}
        />
        
        <Filter 
          type={'month'}
          allValues={monthFilters}
          handleChange={handleUpdateMonth}
          currentValue={month}
        />
      <section>
        {allPhotos
        .filter(photo => {
          if(year && month){
            return photo.year === year && photo.month === month
          }
          return photo
        })
        .filter(photo =>{
          if(year){
            return photo.year === year
          }
          return photo
        })
        .filter(photo =>{
          if(month){
            return photo.month === month
          }
          return photo
        })
        .map(photo =>{
          return <ImageCard key={photo.id} cardInfo={photo} />
        })
        }
      </section>
    </main>
  )
  }
  
  export default ImageGrid;