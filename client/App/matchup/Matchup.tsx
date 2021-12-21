import React from 'react';
import Cell from '../cell/Cell';

interface Props {
  isTop: boolean,
  id1: number,
  id2: number | null,
  winner: number | null;
};

const Matchup = ({ isTop, id1, id2, winner }: Props): JSX.Element => {
  return (
    <>
      <div className='matchup'>
        <div>
          <Cell id={id1} />
          <div className='matchup-gap'></div>
          <Cell id={id2} />
        </div>
        <div className='arrow-container'>
          <div className='cell-arrow'>
            <div className='arrow arrow-top'></div>
            <div className='arrow arrow-bottom'></div>
          </div>
          <div className={`matchup-arrow matchup-${isTop ? 'top' : 'bottom'}`}></div>
        </div>
      </div>
    </>
  );
};

export default Matchup;