//@ts-nocheck
import { motion } from 'framer-motion';

const HoverImage = ({ src, alt }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img src={src} alt={alt} />
    </motion.div>
  );
};

export default HoverImage;
