import React, { useEffect, useState } from 'react';


interface AppProps {
  id: number,
  name: string,
  image: string
}

const Cell = ({ id, name, image }: AppProps): JSX.Element => {
  return (
    <>
      <div>
        <img src={image} alt="" />
        <h5>{name}</h5>
      </div>
    </>
  )
}

export default Cell