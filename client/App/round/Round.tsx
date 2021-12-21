import React, { useEffect, useState } from 'react';
import { MatchRound } from '../../types';
import Matchup from '../matchup/Matchup';


const Round = ({ id, matches }: MatchRound): JSX.Element => {

  const [round, setRound] = useState<MatchRound | null>(null);

  useEffect(() => {

  }, [id, ...matches]);


  return (
    <div>
      {round && round.matches.map((match, idx) => {
        return (
          <div key={idx}>
            <Matchup {...match} isTop={idx % 2 === 0} />
          </div>
        )
      })}
    </div>
  )
};

export default Round;