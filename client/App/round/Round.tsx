import React, { useEffect, useState } from 'react';
import { MatchRound } from '../../types';
import Matchup from '../matchup/Matchup';


const Round = ({ id, matches, roundNo }: MatchRound): JSX.Element => {

  const [round, setRound] = useState<MatchRound | null>(null);
  const single = matches.length === 1;

  let gapHeight = {
    height: `${(roundNo) * 2}rem`,
  }

  let topGapHeight = {
    height: `${(roundNo - 1) * 3.75}rem`,
  }

  useEffect(() => {
    setRound({ id, matches, roundNo });
  }, [id, ...matches]);

  return (
    <div id={`round-${id}`} className='round'>
      <div style={topGapHeight}></div>
      {round && round.matches.map((match, idx) => {
        return (
          <div key={idx} className='match-round'>
            <Matchup {...match} isTop={idx % 2 === 0}
              topGap={!single && (idx != 0) && (idx % 2 === 1)}
              bottomGap={!single && (idx < matches.length - 1) && (idx % 2 === 0)} />
            {idx % 2 === 1 && <div style={gapHeight}></div>}
          </div>
        )
      })}
    </div>
  )
};

export default Round;