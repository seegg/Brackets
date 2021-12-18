import React from 'react'

interface AppProps {
  name: String
}

const App = ({ name }: AppProps): JSX.Element => {
  console.log('hello world 2!');
  return (
    <>
      <div>
        {`Hello ${name}!`}
      </div>
    </>
  )
}

export default App;