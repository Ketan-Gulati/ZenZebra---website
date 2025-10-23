'use client'

import { motion } from "framer-motion";


function what() {
  return (
    <section className="relative  text-white py-24 px-6 text-center">
      <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-bold text-white"
        >
          What is <span className="text-[#CC2224]">ZenZebra</span>?
        </motion.h2>

      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6, delay:0.2}}
      className="max-w-3xl mx-auto mt-6 text-white/80 text-lg leading-relaxed">
        ZenZebra is where better living meets real convenience. We bring
        exciting products right into your daily spaces - from offices to gyms to
        cafés - so you can{" "}
        <span className="text-white font-medium">try before you buy</span> and
        discover what truly fits your routine. Think of it as a lifestyle store
        that lives with you - helping you snack smarter, feel better, and live
        effortlessly every day. No pressure. No guesswork. Just better choices,
        made simple.
      </motion.p>

      <p className="mt-6 text-white/60 italic">
        Right where you are. Try it first. Own it after.
      </p>
    </section>
  );
}

export default what;