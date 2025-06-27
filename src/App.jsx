import React from 'react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Онкология Study
      </motion.h1>
      <p className="text-lg text-gray-700">
        Добро пожаловать в приложение для изучения онкологии.
      </p>
    </div>
  )
}
