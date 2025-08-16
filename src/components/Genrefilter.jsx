
const Genrefilter = ({genreList,setSelectedGenre})=>{
    return(
        <select onChange={(e)=>setSelectedGenre(e.target.value)}  className=' mt-20 p-2 text-white backdrop-blur-md rounded bg-black opacity-40'>
        <option value="">All Genre</option>
       
            {genreList.map((gen)=>{
                return(
                    <option key={gen.id} value={gen.id}>{gen.name}</option>
                )
            })}
       
      </select>
    )
}
export default Genrefilter