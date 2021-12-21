import React from 'react'
import Cell from '../cell/Cell'

interface Props {
  id1: number,
  id2: number | null,
  winner: number | null;
}

const Matchup = ({ id1, id2, winner }: Props): JSX.Element => {
  return (
    <>
      <div className='matchup'>
        <Cell id={id1} />
        <div className='matchup-gap'></div>
        <Cell id={id2} />
      </div>
    </>
  )
};

export default Matchup;