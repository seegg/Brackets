import React from 'react';
import Cell from '../cell/Cell';
import { Match } from '../../types';

interface Props extends Match {
  isTop: boolean,
  topGap: boolean,
  bottomGap: boolean,
};

const Matchup = ({ id1, id2, winner, isTop, topGap, bottomGap }: Props): JSX.Element => {
  return (
    <>
      <div className='matchup'>
        <div>
          <div>
            {(isTop && topGap) && <div className='filler-gap top-gap'></div>}
          </div>
          <div className='matchup'>
            <div >
              {(!isTop && topGap) && <div className='filler-gap top-gap'></div>}
              <div className='matchup'>
                <div>
                  <Cell id={id1} isWinner={id1 === winner} />
                  <div className='matchup-gap'></div>
                  <Cell id={id2} isWinner={id2 === winner} />
                </div>
                <div className='arrow-container'>
                  <div className='cell-arrow'>
                    <div className='arrow arrow-top'></div>
                    <div className='arrow arrow-bottom'></div>
                  </div>
                </div>
              </div>
              {/* Decide whether the gap should extend to the end or just behind 
              the outer arrow by on the position of the matchup. */}
              {(isTop && bottomGap) && <div className='filler-gap bottom-gap'></div>}
            </div>
            {(topGap || bottomGap) && <div className={`matchup-arrow matchup-${isTop ? 'top' : 'bottom'}`}></div>}
          </div>
          <div>
            {(!isTop && bottomGap) && <div className='filler-gap bottom-gap'></div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Matchup;