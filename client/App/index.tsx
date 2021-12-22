import React from 'react'
import Matchup from './matchup/Matchup'
import Round from './round/Round';
import { MatchRound } from '../types';

interface AppProps {
  name: String
}

const App = ({ name }: AppProps): JSX.Element => {
  const round: MatchRound = {
    id: 1,
    round: 1,
    matches: [
      { id1: 1, id2: 2, winner: 1 },
      { id1: 3, id2: 4, winner: null },
      { id1: 1, id2: 2, winner: 2 },
      { id1: 3, id2: 4, winner: null },
      { id1: 1, id2: 2, winner: 1 },
      { id1: 3, id2: 4, winner: null },
      { id1: 1, id2: 2, winner: null },
      { id1: 3, id2: 4, winner: 4 },
    ]
  }
  return (
    <>
      <div>
        <Round {...round} />
      </div>
    </>
  )
}

export default App;
