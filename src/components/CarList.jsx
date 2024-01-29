import React from 'react'

const CarList = ({id, nome, km}) => {
  return (
    <>
    <ul>
      <li>{id}</li>
      <li>{nome}</li>
      <li>{km}</li>
    </ul>
    </>
  )
}

export default CarList