import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import Backdrop from './BackdropInfo';
import { MotionConfig, motion, AnimatePresence } from "framer-motion";

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.075,
      type: "spring",
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    opacity: 0,
  },
};

const InfoModal = () => {
  const [info, setInfo] = useState(false);

  return (
    <>
      <MotionConfig
          transition={{
            duration: '0.125',
            ease: 'easeInOut'
          }}
          >
          <motion.h1
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className='text-2xl my-4 font-light underline cursor-pointer'
          onClick={() => setInfo(!info)}>
            What is memory card?
          </motion.h1>
      </MotionConfig>
      <AnimatePresence>
        {info && 
        <Backdrop onClick={() => setInfo(!info)}> 
        <motion.div 
              className='absolute top-[20%] w-[90%] left-[5%] sm:left-[5.5%] sm:top-[40%] z-20 text-primary bg-text p-9 rounded-md'
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit">
                <p className='text-md sm:text-xl'>Memory card is a classic game that tests your ability to recall and match pairs of cards. The deck consists of cards with identical pairs of images or symbols. The cards are shuffled and placed face down in a grid. Players take turns flipping over two cards at a time, trying to find a matching pair. If the cards match, the player keeps the pair and takes another turn. If they dont match, the cards are flipped back over, and the next player takes a turn. The game continues until all pairs have been found, and the player with the most pairs wins.</p>
                <motion.div
                  onClick={() => setInfo(!info)} className='absolute top-0  right-2 text-error text-4xl cursor-pointer'
                  whileHover={{
                    scale: 1.15,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <RxCross2 />
                </motion.div>
          </motion.div>
        </Backdrop>}
      </AnimatePresence>
      
    </>
  )
}

export default InfoModal