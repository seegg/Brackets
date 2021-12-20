import React from 'react'
import Cell from './cell/Cell';

interface AppProps {
  name: String
}

const App = ({ name }: AppProps): JSX.Element => {
  console.log('hello world 2!');
  return (
    <>
      <div>
        <Cell id={3} />
      </div>
    </>
  )
}

export default App;