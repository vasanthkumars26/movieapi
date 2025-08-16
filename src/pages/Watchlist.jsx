import React, { useContext, useState } from 'react'
import Genrefilter from '../components/Genrefilter'
import { WatchListContext } from '../context/Watchlistcontext'
import Moviepage from '../components/Moviepage'

const Watchlist = () => {
  const {watchlist,genreList} = useContext(WatchListContext)
  const[selectedGenre,setSelectedGenre] = useState("")
  const [search,setSearch] = useState("")

  const filteredmovies = watchlist.filter((movie)=>
  movie.title.toLowerCase().includes(search.toLowerCase())
  ).filter((movie)=>{
    return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
  })

  return (
    <div >
      <input onChange={(e)=>setSearch(e.target.value)} className='z-40 border mt-3 p-2.5 text-white backdrop-blur-md rounded bg-black opacity-40 fixed w-1/2 md:w-3/4 lg:w-1/2 top-16 transform -translate-x-1/2'
       type="text" placeholder='search for movies..'/>
       <div className='mt-24'>
         <Genrefilter  genreList={genreList} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
       </div>
      
      <div className='cardcontainer m-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredmovies.map((movie)=>{
            return (
            <Moviepage key={movie.id} movie={movie} />
        )})}

      </div>
    </div>
  )
}

export default Watchlist