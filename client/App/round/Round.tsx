import React, { useEffect, useState } from 'react';
import { MatchRound } from '../../types';
import Matchup from '../matchup/Matchup';


const Round = ({ id, matches, roundNo }: MatchRound): JSX.Element => {

  const [round, setRound] = useState<MatchRound | null>(null);
  const single = matches.length === 1;
  useEffect(() => {
    setRound({ id, matches, roundNo });
  }, [id, ...matches]);

  return (
    <div id={`round-${id}`}>
      {round && round.matches.map((match, idx) => {
        return (
          <div key={idx}>
            <Matchup {...match} isTop={idx % 2 === 0}
              topGap={!single && (idx != 0) && (idx % 2 === 1)}
              bottomGap={!single && (idx < matches.length - 1) && (idx % 2 === 0)} />
            {idx % 2 === 1 && <div className='round-gap'></div>}
          </div>
        )
      })}
    </div>
  )
};

export default Round;