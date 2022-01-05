import React from 'react'
import Matchup from './matchup/Matchup'
import Round from './round/Round';
import Cell from './cell/Cell';
import Bracket from './bracket/Bracket'
import { MatchRound, MatchBracket } from '../types';

interface AppProps {
  name: String
}

const App = ({ name }: AppProps): JSX.Element => {

  //remove when done.
  const round1: MatchRound = {
    id: 1,
    roundNo: 1,
    matches: [
      { id1: 1, id2: 2, winner: 1 },
      { id1: 3, id2: 4, winner: null },
      { id1: 1, id2: 2, winner: 2 },
      { id1: 3, id2: 4, winner: null },
      { id1: 1, id2: 2, winner: 1 },
      { id1: 3, id2: 4, winner: null },
      { id1: 1, id2: 2, winner: 2 },
      { id1: 3, id2: 4, winner: null },
    ]
  }
  const round2: MatchRound = {
    id: 2,
    roundNo: 2,
    matches: [
      { id1: 1, id2: 3, winner: null },
      { id1: 2, id2: 4, winner: 2 },
      { id1: 2, id2: 3, winner: null },
      { id1: 1, id2: 4, winner: null },
    ]
  }

  const round3: MatchRound = {
    id: 3,
    roundNo: 3,
    matches: [
      { id1: 1, id2: 3, winner: null },
      { id1: 2, id2: 4, winner: 2 },
      { id1: 2, id2: 3, winner: null },
      { id1: 1, id2: 4, winner: null },
    ]
  }

  const match: MatchBracket = {
    id: 1,
    rounds: [round1, round2, round3]
  }
  return (
    <>
      <div>
        <Bracket {...match} />
      </div>
    </>
  )
}

export default App;
