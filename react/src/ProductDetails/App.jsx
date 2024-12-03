import React from 'react'
import Index from './ProductDetails/Index'
import PropertyDetails from './ProductDetails/PropertyDetails'
import VedioCard from './ProductDetails/VedioCard'
import SearchBar from './ProductDetails/Home/SearchBar'
import MapSection from './ProductDetails/MapSection'
import NearSec from './ProductDetails/NearSec'
import ReviewsSection from './ProductDetails/Review/ReviewsSection'
import Footer from './ProductDetails/Footer'
import Properties from './ProductDetails/Properties'




const App = () => {
  return (
    <div>
      <Index/>
      <PropertyDetails />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <VedioCard />
      <SearchBar/>
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <MapSection />
      <NearSec/>
    </div>
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <ReviewsSection />
    </div>
     <Properties/>
     <Footer/>
    </div>
  )
}

export default App