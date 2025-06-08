'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center text-white px-4 text-center bg-gradient-to-br from-[#0d1117] via-primary/10 to-blue-500/15">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/logo.pngg"
          alt="logo"
          height={75}
          width={75}
          className="mx-auto mb-4"
        />

        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
          Badge
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-primary mt-1">
          Name
        </h1>

        <p className="mt-4 text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          Short description about you
          {/*<br />*/}
          {/*Bla bla bla*/}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="bg-primary hover:bg-pink-700 text-white py-2 px-5 rounded-full shadow-md transition">
            First Button
          </button>
          <button className="border border-primary text-primary hover:bg-primary hover:text-white py-2 px-5 rounded-full shadow-md transition">
            Second Button
          </button>
        </div>
      </motion.div>
    </header>
  )
}
