import { motion } from 'framer-motion'
import { TbBrandGoogle } from 'react-icons/tb'
import { SiLinkedin } from 'react-icons/si'

import { TbBrandGithub } from 'react-icons/tb'

import { SiGmail } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import Link from 'next/link'

export const ContactMe = () => {
  return (
    <div className="">
      <div className="p-10 h-full w-full">
        <div className="flex justify-center h-20">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-6xl text-slate-50 font-thin bg-gradient-to-r from-purple-200 via-slate-50 to-purple-400 bg-clip-text text-transparent"
          >
            Contact Me
          </motion.h1>
        </div>
        <div className="py-20 flex justify-evenly items-center w-full">
          <Link
            href="https://www.linkedin.com/in/rishab-bisht-605b34309/"
            target="_blank"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 8px rgb(255,255,255)',
                boxShadow: '0px 0px 8px rgb(255,255,255)',
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <SiLinkedin className="text-6xl text-blue-400" />
            </motion.button>
          </Link>

          <Link href="mailto:rishab1493@gmail.com" target="_blank">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 8px rgb(255,255,255)',
                boxShadow: '0px 0px 8px rgb(255,255,255)',
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className="border w-20 h-20 rounded-full"
            >
              <div className="flex justify-center">
                <SiGmail className="text-6xl text-slate-50" />
              </div>
            </motion.button>
          </Link>
          <Link href="https://github.com/rishab-bisht" target="_blank">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 8px rgb(255,255,255)',
                boxShadow: '0px 0px 8px rgb(255,255,255)',
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <TbBrandGithub className="text-6xl text-slate-50" />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  )
}
