import React from "react";
import Vegie from "../components/Vegie";
import Popular from "../components/Popular";
import {motion} from 'framer-motion';

function Home() {
  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
      <Vegie />
      <Popular />
    </motion.div>
  );
}

export default Home;
