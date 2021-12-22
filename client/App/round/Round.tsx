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
    <div>
      {round && round.matches.map((match, idx) => {
        return (
          <div key={idx} id={`round-${id}`}>
            <Matchup {...match} isTop={idx % 2 === 0}
              topGap={!single && idx != 0}
              bottomGap={!single && idx < matches.length - 1} />
          </div>
        )
      })}
    </div>
  )
};

export default Round;