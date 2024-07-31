import React from 'react'
import Header from './Dashboard/Header'
import ListingViews from './Dashboard/ListingViews'
import Sales from './Dashboard/Sales'


const App = () => {
  return (
    <div>
      <Header/>
      <ListingViews/>
      <Sales/>
    </div>
  )
}

export default App