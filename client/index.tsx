import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter as router } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello world 1');
  ReactDOM.render(
    <App name="bob" />,
    document.getElementById('app')
  )
})