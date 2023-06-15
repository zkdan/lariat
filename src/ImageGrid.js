
import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import Filter from "./Filter";
import getMonth from "./utils.js"
import "./ImageGrid.css";

const monthFilters = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December','cover'];

const  ImageGrid = () =>{
  const [allPhotos, setAllPhotos] = useState([]);
  const [allYears, setAllYears] = useState([]);
  const [year, setYear] = useState('all');
  const [month, setMonth] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  const getAllYears = (data) => {
    let years = new Set();
    data.forEach(item=>{
      years.add(item.year);
    })
    years = Array.from(years);
    years.unshift('all')
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
      setFilteredPhotos(data);
    });
  },[]);

  const handleUpdateYear = (year)=>{
    setMonth('all');
    setYear(year);
    if(year !== 'all'){
      const updated =  allPhotos.filter(photo => {
        return photo.year === year
      });
      setFilteredPhotos(updated);
    } else {
      setFilteredPhotos(allPhotos);
    }
  }
  const handleUpdateMonth =(month)=>{
    setYear('all');
    setMonth(month);
    const updated =  allPhotos.filter(photo => {
      return photo.month === month
    });
    setFilteredPhotos(updated);
  }

  return(
    <main>
      <Filter
        type={'year'} 
        allValues ={allYears} 
        handleChange={handleUpdateYear} 
        currentValue={year}/>
        
        <Filter 
          type={'month'}
          allValues={monthFilters}
          handleChange={handleUpdateMonth}
          currentValue={month}
        />
      <section>
        {filteredPhotos.map(photo => {
        return <ImageCard key={photo.id} cardInfo={photo} />
      })}
      </section>
    </main>
  )
  }
  
  export default ImageGrid;