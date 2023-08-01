import { motion } from 'framer-motion';
interface MovingImageProps {
  url: string;
}

const MovingImage = ({ url }: MovingImageProps) => {
  return (
    <motion.img
      src={url}
      animate={{
        scale: [1, 1.1, 1],
        y: ['0%', '-5%', '0%'],
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
        times: [0, 0.5, 1],
        loop: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};

export default MovingImage;
