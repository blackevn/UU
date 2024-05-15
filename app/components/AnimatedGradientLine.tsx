import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedGradientLine = () => {
  const controls = useAnimation(); // Animation control to start animations

  useEffect(() => {
    // Start the width animation when the component mounts
    controls.start({
      width: "100%",  // Animate width to 100%
      transition: {
        delay: 0.5,
        duration: 2,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <div className='relative'>
      <h1 className="lg:text-5xl text-3xl font-bold uppercase m-0 p-0">Animated Gradient Line</h1>
      <motion.div
        id='lineDiv'
        className="animated-gradient h-[10px] absolute bottom-0 left-0 top-8 -z-10"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
        style={{ backgroundSize: "300% 300%" }}
      />
    </div>
  );
};

export default AnimatedGradientLine;


