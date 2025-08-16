import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WatchListContext } from '../context/Watchlistcontext'

const Navbar = () => {
  const {watchlist} = useContext(WatchListContext)
  return (
    <nav className='sticky top-0 z-30 bg-blue-200 p-4 flex justify-between text-lg'>
            <Link to={"/"} className='text-xl font-bold'>MovieApp</Link>
            <Link to={"watchlist"}>WatchList <span className='text-red-500 text-2xl font-semibold'>({watchlist.length})</span> </Link>

    </nav>
  )
}

export default Navbar