// Backdrop.js
import { motion } from 'framer-motion';

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="fixed inset-0 w-full h-full bg-black/50 z-10"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;