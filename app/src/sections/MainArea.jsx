import Button from "../Components/Button";
import { FaPlayCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import InfoModal from "../Components/InfoModal";
import MovieCard from "../Components/MovieCard";
import { MdOutlineRestartAlt } from "react-icons/md";


const MainArea = () => {
  const [start, setStart] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=3cd7ce9c3d0c6c0b6e837006a8d21a1e")
    .then(res => res.json())
    .then(json => setMovieList(json.results)).catch(error => {
      console.error('Error fetching movie data:', error);
    });
  }

  const handleStartClick = () => {
    setStart(true);
  }

  useEffect(() => {
      if (start === true) {
        getMovie();
      }
    }, [start])

  return (
    <div className="h-[89vh] sm:h-[100vh] font-bold p-5 overflow-auto">
      {start ? 
        <>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl py-4">Current Score: 1 Max Score : 50</h1>
            <Button label="Restart" className="py-4" backgroundColor="bg-error" clickEvent={handleStartClick} iconComponent={<MdOutlineRestartAlt />}/>
          </div>
          <div className="flex flex-wrap flex-1 justify-center">
            {movieList.map((movie, index) => (
              <MovieCard key={index} movieLink={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} movieTitle={movie.original_title}/>
            ))}
          </div>
        </>
        : 
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl my-8">Play Now!</h1>
          <Button label="Begin " clickEvent={handleStartClick} iconComponent={<FaPlayCircle />}/>
          <InfoModal />
        </div>}
      
    </div>
  )
}

export default MainArea