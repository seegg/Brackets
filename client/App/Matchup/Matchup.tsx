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
        <div>
          <Cell id={id1} />
          <div className='matchup-gap'></div>
          <Cell id={id2} />
        </div>
        <div className='arrow-container'>
          <div className='arrow-top'></div>
          <div className='arrow-bottom'></div>
        </div>
      </div>
    </>
  )
};

export default Matchup;