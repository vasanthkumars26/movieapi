import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Navbar from './pages/Navbar'
import { WatchListProvider } from './context/Watchlistcontext'


function App() {
  

  return (
    <WatchListProvider>
    
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path='watchlist' element={<Watchlist/>} />
      <Route/>
      
     </Routes>
     
    
    </WatchListProvider>
  )
}

export default App
