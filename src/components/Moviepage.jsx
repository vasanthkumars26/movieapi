import React, { useContext } from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { WatchListContext } from '../context/Watchlistcontext'
const Moviepage = ({movie}) => {

const {watchlist,toggleWatchList} = useContext(WatchListContext)
const inwatchlist = watchlist.some(m=> m.id == movie.id);


  return (
    <div className='bg-blue-200 rounded-lg shadow-md  p-4 relative mt-24'>
       <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
       alt={movie.title} className='w-full h-80 object-contain'/>
        <h3 className='text-xl font-bold mt-4'>{movie.title}</h3>
        <p className='text-lg text-gray-400'>{movie.release_date}</p>
        <button onClick={()=>toggleWatchList(movie)} className='absolute top-1 right-2 text-xl text-red-500 '>{inwatchlist ? <FaHeart/> : <FaRegHeart/>}</button>
        
    </div>
  )
}

export default Moviepage