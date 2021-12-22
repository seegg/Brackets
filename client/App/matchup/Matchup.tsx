import React from 'react';
import Cell from '../cell/Cell';
import { Match } from '../../types';

interface Props extends Match {
  isTop: boolean,
  topGap: boolean,
  bottomGap: boolean,
};

const Matchup = ({ id1, id2, winner, isTop, topGap, bottomGap }: Props): JSX.Element => {
  console.log(topGap);
  return (
    <>
      <div className='matchup'>
        <div>
          {topGap && <div className='matchup-gap'></div>}
          <Cell id={id1} isWinner={id1 === winner} />
          <div className='matchup-gap'></div>
          <Cell id={id2} isWinner={id2 === winner} />
          {bottomGap && <div className='matchup-gap'></div>}
        </div>
        <div className='arrow-container'>
          <div className='cell-arrow'>
            <div className='arrow arrow-top'></div>
            <div className='arrow arrow-bottom'></div>
          </div>
        </div>
        {(topGap || bottomGap) && <div className={`matchup-arrow matchup-${isTop ? 'top' : 'bottom'}`}></div>}
      </div>
    </>
  );
};

export default Matchup;