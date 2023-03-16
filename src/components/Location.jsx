import React from "react";

const Location = ({locationData}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>ID</th>
          <th>Tipo</th>
          <th>Dimensión</th>
          <th>Población</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{locationData?.name}</td>
          <td>{locationData?.id}</td>
          <td>{locationData?.type}</td>
          <td>{locationData?.dimension}</td>
          <td>{locationData?.residents?.length}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Location
