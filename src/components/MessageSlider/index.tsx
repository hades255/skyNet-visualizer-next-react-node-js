import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MessageSlider = ({ messages }: { messages: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex) => {
        const newIndex = currentIndex + 1;

        if (newIndex === messages.length) {
          return 0; // go back to the first message
        }

        return newIndex;
      });
    }, 3000); // change every 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, [messages]);

  return (
    <motion.div
      key={index}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      {messages[index]}
    </motion.div>
  );
};

export default MessageSlider;
