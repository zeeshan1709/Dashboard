import React from 'react'
import Navbar from './Dashboard/Navbar'

// import Sidebar from './Dashboard//Sidebar'
// import Header from './Dashboard/Header'
// import ListingViews from './Dashboard/ListingViews'
import Sales from './Dashboard/Sales'
import MainLayout from './Dashboard/Mainlayout'



const App = () => {
  return (
    <div>
      <Navbar/>
       <MainLayout/>
      {/* <Sidebar/>
      <Header/>
      <ListingViews/> */}
      <Sales/>
    </div>
  )
}

export default App