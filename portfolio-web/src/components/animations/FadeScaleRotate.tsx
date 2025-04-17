import { motion } from "framer-motion";
import React from "react";

interface FadeScaleRotateProps {
  children: React.ReactNode;
}

const FadeScaleRotate: React.FC<FadeScaleRotateProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: -360 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.7, rotate: 360 }}
      transition={{
        type: "tween",
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeScaleRotate;
