'use client'

import { motion } from 'framer-motion'
import { Truck, ShieldCheck, BadgeIndianRupee } from 'lucide-react'

export default function Why() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#353535]/60 backdrop-blur-sm px-6 py-14">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-bold text-white"
        >
          Why <span className="text-[#CC2224]">ZenZebra</span>?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-white/70 max-w-2xl mx-auto"
        >
          We make smarter choices effortless - by meeting you in your everyday moments.
        </motion.p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 text-white shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CC2224]/15">
                <Truck className="h-6 w-6 text-[#CC2224]" />
              </div>
              <h3 className="text-lg font-semibold">Convenience</h3>
            </div>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Discover products right where you are - at work, at play, or on the go.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 text-white shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CC2224]/15">
                <ShieldCheck className="h-6 w-6 text-[#CC2224]" />
              </div>
              <h3 className="text-lg font-semibold">Assurance</h3>
            </div>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Try first, own later. Experience every product before you decide.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 text-white shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CC2224]/15">
                <BadgeIndianRupee className="h-6 w-6 text-[#CC2224]" />
              </div>
              <h3 className="text-lg font-semibold">Value</h3>
            </div>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Premium experience, honest prices - designed for better living.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
