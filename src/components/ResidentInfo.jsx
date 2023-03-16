import axios from 'axios';
import { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

  const [resident, setResident] = useState({})

  useEffect(() => {
    axios
      .get(url)
      .then(resp => setResident(resp.data))
  }, [])

  //console.log(resident);

  //condicional para status
  let arrayStatus = [];
  const bgStatus = () => {
    if(resident.status === 'Alive') {
      arrayStatus.push('var(--verde)', 'Vivo');

    }else if(resident.status === 'Dead'){
      arrayStatus.push('var(--rojo)', 'Muerto');

    } else {
      arrayStatus.push('var(--gray)', 'Desconocido');
    }

    return arrayStatus;
  }

   bgStatus();

  return (
    <section className='card-resident'>
      <div className='info-status'>
        <div className='status' 
          style={{backgroundColor: arrayStatus[0] }}>
        </div>
        <p>{arrayStatus[1]}</p>
      </div>
      <div className='image'>
        <img src={resident?.image}/>
      </div>
      <div className='info'>
        <div className='column'>
          <h3>{resident?.name}</h3>
          <ul>
            <li><strong>Especies: </strong>{resident?.species}</li>
            <li><strong>Género: </strong>{resident?.gender}</li>
            <li><strong>Origen: </strong>{resident?.origin?.name}</li>
            <li><strong>Episodios: </strong>{resident?.episode?.length}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ResidentInfo
