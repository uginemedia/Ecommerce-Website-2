import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import ProductGrid from './components/ProductGrid'
import CollectionSlider from './components/CollectionSlider'  
import Footer from './components/Footer'

const App = () => {
  return <>
    <Header />
    <Hero />
    <FilterBar />
    <ProductGrid />
    <CollectionSlider />
    <Footer />
  </>
}

export default App