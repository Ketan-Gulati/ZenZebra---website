'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function Locations() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-bold text-[#f5f5f5] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        >
          Where We’re <span className="text-[#CC2224]">Located</span>
        </motion.h2>

        {/* 3 Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-xl bg-white text-[#353535] shadow-xl overflow-hidden"
          >
            <div className="relative aspect-[3/4] bg-black">
              <video
                src="/Awfis-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                preload='metadata'
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-[#CC2224] font-semibold text-sm">
                <MapPin className="h-4 w-4" />
                <span>Awfis, Ambience mall, Gurugram</span>
              </div>
              <p className="mt-2 text-sm text-[#353535]/70">
                Discover top brands and try them before you buy inside Ambience Mall.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-xl bg-white text-[#353535] shadow-xl overflow-hidden"
          >
            <div className="relative aspect-[3/4] bg-black">
              <video
                src="/SW video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                preload='metadata'
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-[#CC2224] font-semibold text-sm">
                <MapPin className="h-4 w-4" />
                <span>Smartworks, Gurugram</span>
              </div>
              <p className="mt-2 text-sm text-[#353535]/70">
                Experience ZenZebra at the heart of Gurugram's professional spaces.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-xl bg-white text-[#353535] shadow-xl overflow-hidden"
          >
            <div className="relative aspect-[3/4] bg-black">
              <video
                src="/Lodhi-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                preload='metadata'
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-[#CC2224] font-semibold text-sm">
                <MapPin className="h-4 w-4" />
                <span>The Lodhi, New delhi</span>
              </div>
              <p className="mt-2 text-sm text-[#353535]/70">
                A luxurious experience meets better living — right where you unwind.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}