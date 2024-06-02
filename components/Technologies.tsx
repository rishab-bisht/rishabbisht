'use client'

import { TbBrandNodejs } from 'react-icons/tb'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandReact } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { motion } from 'framer-motion'

const containers = (delay: any) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
    whileInView: { opacity: 1 },
  },
})

export const Technologies = () => {
  return (
    <div className="">
      <div className="p-10 h-full w-full">
        <div className="flex justify-center h-20">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-6xl text-slate-50 font-thin bg-gradient-to-r from-purple-200 via-slate-50 to-purple-400 bg-clip-text text-transparent"
          >
            Technologies
          </motion.h1>
        </div>
        <div className="relative flex flex-col justify-center items-center py-20">
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="mb-6 border rounded-2xl w-40 h-40 flex justify-center items-center"
          >
            <TbBrandNodejs className="text-9xl text-green-400" />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="mb-6 border rounded-2xl w-40 h-40 flex justify-center items-center"
          >
            <TbBrandNextjs className="text-9xl text-slate-100" />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="mb-6 border rounded-2xl w-40 h-40 flex justify-center items-center"
          >
            <TbBrandReact className="text-9xl text-blue-400" />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="mb-6 border rounded-2xl w-40 h-40 flex justify-center items-center"
          >
            <SiMongodb className="text-9xl text-green-400" />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="mb-6 border rounded-2xl w-40 h-40 flex justify-center items-center"
          >
            <SiExpress className="text-9xl text-slate-50" />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="mb-6 border rounded-2xl w-40 h-40 flex justify-center items-center"
          >
            <SiPostgresql className="text-9xl text-blue-300" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
