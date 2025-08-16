import React, { useContext, useEffect,useState } from 'react'
import Moviepage from '../components/Moviepage'
import { WatchListContext } from '../context/Watchlistcontext'

const Home = () => {
  
const [movies,setMovies] = useState([])
const [page, setPage] = useState(1)
const [search,setSearch] = useState("")



useEffect(()=>{
   let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=0a518ba06251f2358aeabd324afba617`;

        if(search){
            url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=0a518ba06251f2358aeabd324afba617`;
         }
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    setMovies(data.results)
  })
},[page,search])


  return (
    <div>
      <input onChange={(e)=>setSearch(e.target.value)} className='z-40 border mt-3 p-2.5 text-white backdrop-blur-md rounded bg-black opacity-40 fixed w-1/2 md:w-3/4 lg:w-1/2 top-16 transform -translate-x-1/2'
       type="text" placeholder='search for movies..'/>
      <div className='.cardcontainer m-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {movies.map((movie)=>{
            return (
            <Moviepage key={movie.id} movie={movie} />
        )})}

      </div>
      <div className='flex justify-between mt-5'>
        <button className='bg-black rounded-xl text-white font-bold p-2' disabled={page==1} onClick={()=>setPage(prev=>prev-1)}>prev</button>
        <button className='bg-black rounded-xl text-white font-bold p-2' onClick={()=>{
          setPage(prev=>prev+1)}} >next</button>
      </div>
    </div>
  )
}

export default Home