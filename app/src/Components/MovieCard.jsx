import { motion } from "framer-motion"

const MovieCard = ({ movieLink, movieTitle, handleClick }) => {
  return (
    <motion.div
    transition={{
      duration: '0.125',
      ease: 'easeInOut'
    }}
    whileHover={{
      scale: 1.05,
      rotate: "-2.5deg",
    }}
    whileTap={{
      scale: 0.95,
      rotate: "2.5deg",
    }}
    className="flex flex-col align-center items-center text-center bg-text w-[200px] h-[300px] m-5 p-3 rounded-lg cursor-pointer"
    onClick={handleClick}>
      <img src={movieLink} alt="movie poster" className="w-[150px] h-[250px]"/>
      <h1 className="text-primary">{movieTitle}</h1>
    </motion.div>
  )
}

export default MovieCard