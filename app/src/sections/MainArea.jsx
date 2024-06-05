import Button from "../Components/Button";
import { FaPlayCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import InfoModal from "../Components/InfoModal";
import MovieCard from "../Components/MovieCard";
import { MdOutlineRestartAlt } from "react-icons/md";


const MainArea = () => {
  const [start, setStart] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovie = async () => {
    setIsLoading(true); // Set loading state to true before fetching data
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=3cd7ce9c3d0c6c0b6e837006a8d21a1e");
      const json = await response.json();
      setMovieList(json.results);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching data (regardless of success or failure)
    }
  }

  const handleStartClick = () => {
    setStart(true);
  }

  const handleRestartClick = () => {
    setStart(!start);
  }

  useEffect(() => {
      if (start === true) {
        getMovie();
        console.log(movieList);
      }
    }, [start]);

  return (
    <div className="h-[89vh] sm:h-[100vh] font-bold p-5 overflow-auto">
      {start ? 
        <>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl py-4">Current Score: 1 Max Score : 50</h1>
            <Button label="Restart" className="py-4" backgroundColor="bg-error" clickEvent={handleRestartClick} iconComponent={<MdOutlineRestartAlt />}/>
          </div>
          { isLoading ?
            <div className="flex justify-center">
              <p className="text-8xl">loading...</p>
            </div> :
            <div className="flex flex-wrap flex-1 justify-center">
              {movieList.map((movie, index) => (
                <MovieCard key={index} movieLink={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} movieTitle={movie.title}/>
              ))}
            </div>
          }
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