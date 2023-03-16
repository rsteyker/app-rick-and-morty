import { useState, useEffect } from 'react';
import axios from 'axios';
import Location from './Location';
import ResidentInfo from './ResidentInfo';
import Page from './Page';


const RandomApp = () => {

    const [ location, setLocation ] = useState({})

    useEffect( () => {
        let idLocation = Math.floor(Math.random()*126)+1
        axios
            .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
            .then(resp => setLocation(resp.data))
            .catch(err => console.error(err))
      }, [])
    
    //console.log(location.residents);
     
    //SECCTION SEARCH
    const [search, setSearch] = useState("")
      
    const searchId = () => {
      if (search <= 126) {
        axios
          .get(`https://rickandmortyapi.com/api/location/${search}`)
          .then(resp => setLocation(resp.data))
          .catch(err => console.error(err))
        setSearch("");
      }
    }


    const [ page, setPage ] = useState(1)
    const perPage = 6
    const quantyPage = Math.ceil(location.residents?.length / perPage)
    const firstIndex = (page - 1) * perPage

    //console.log(quantyPage);
  
    const residents = location.residents?.slice(firstIndex + firstIndex + perPage);
  

  return (
    <div>
        <div className='search'>
          <input
            className='input' 
            type='number'
            min={1}
            max={126}
            value={search}
            placeholder='Ingrese un ID de 1-126'
            onChange={(e) => setSearch(e.target.value)}
          /> 
          <button 
            className='button'
            onClick={searchId}>
            Search
          </button>
        </div>
        <p className='title'>¡Wellcome to the crazy universe!</p>

        <Location locationData={ location } />
        <Page page={page} setPage={setPage} quantyPage={quantyPage}/>

        <div  className='container'>
          { 
            residents?.map((rick) => (
              <ResidentInfo url={rick} key={rick} />
            )) 
          } 
        </div>

    </div>
  )
}

export default RandomApp
