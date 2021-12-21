import React from 'react'
import Matchup from './Matchup/Matchup'

interface AppProps {
  name: String
}

const App = ({ name }: AppProps): JSX.Element => {
  console.log('hello world 2!');
  return (
    <>
      <div>
        <Matchup id1={1} id2={2} winner={null} />
      </div>
    </>
  )
}

export default App;
