import React from 'react'

const Page = ({page, setPage, quantyPage }) => {

  return (
    <div className='siguiente'>
      { page >1 && <button className='atras' onClick={() => setPage(page - 1)}>Anteriores</button>}
      <p className='page'>{page} de {quantyPage}</p>
      { quantyPage > page && <button className='next' onClick={() => setPage(page + 1)}>Siguientes</button>}
    </div>
  )
}
     
export default Page
