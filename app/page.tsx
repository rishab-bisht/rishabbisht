'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Technologies } from '@/components/Technologies'
import { NavBar } from '@/components/NavBar'
import { ContactMe } from '@/components/ContactMe'

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const stars = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const mountains = useTransform(scrollYProgress, [0, 1], ['0%', '450%'])

  const moon = useTransform(scrollYProgress, [0, 1], ['0%', '700%'])
  const text = useTransform(scrollYProgress, [0, 1], ['0%', '800%'])

  const containers = (delay: any) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
      whileInView: { opacity: 1 },
    },
  })
  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="bg-gradient-to-b from-purple-950 to-purple-900 h-screen">
        {/* <div className="flex justify-center pt-6">
          <NavBar />
        </div> */}

        <div className="relative w-full h-full flex p-6 justify-center ">
          <div className="absolute z-20">
            <NavBar />
          </div>
          <motion.div
            className="absolute w-full min-h-screen bg-cover bg-center bg-no-repeat bg-parallax  "
            style={{ x: stars }}
          />

          <motion.div
            className="absolute w-full min-h-screen bg-cover bg-center bg-no-repeat bg-parallax4 mix-blend-screen "
            style={{ y: moon }}
          />

          <motion.div
            className="absolute w-full min-h-screen bg-cover bg-center bg-no-repeat bg-parallax3 bg-fixed "
            style={{ y: mountains }}
          />

          <motion.div
            className="relative flex flex-col z-10 justify-center items-center mb-20"
            style={{ y: text }}
          >
            <motion.h2
              variants={containers(0.2)}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-5xl font-extralight text-slate-50 pb-4 bg-gradient-to-r from-slate-50 to-slate-400 bg-clip-text text-transparent tracking-tight"
            >
              Hey,I am Rishab
            </motion.h2>
            <motion.h1
              variants={containers(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-4xl font-extralight text-slate-50 bg-gradient-to-r from-slate-50 to-slate-400 bg-clip-text text-transparent tracking-tight "
            >
              I am a Full-Stack Developer
            </motion.h1>
          </motion.div>

          <motion.div
            className="absolute w-full min-h-screen bg-cover bg-center bg-no-repeat bg-parallax2 bg-fixed"
            style={{}}
          />
          {/* <div className="absolute pt-12 z-10 h-full items-center ">
            <button className="w-56 h-16 rounded-full bg-slate-50 text-slate-900 text-2xl font-extrabold font-custom ">
              Download CV
            </button>
          </div> */}
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-purple-950 to-slate-900 z-20 ">
        <div id="about" className="w-full h-full bg-cover bg-parallax p-10">
          <div></div>
          <div className="p-10 w-full h-full ">
            <motion.div className="flex justify-center">
              <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-6xl text-slate-50 font-thin bg-gradient-to-r from-purple-200 via-slate-50 to-purple-400 bg-clip-text text-transparent"
              >
                About Me
              </motion.h1>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 px-10 py-10">
            <div className="h-full">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="text-medium sm:text-xl font-thin text-slate-50 tracking-tight sm:tracking-normal"
              >
                Hello! I am Rishab, an enthusiastic and passionate aspiring web
                developer with a keen interest in becoming a proficient
                full-stack developer. Although I am just starting my journey in
                web development, my eagerness to learn and grow in this dynamic
                field drives me every day.<br></br> My fascination with
                technology and web development began during my studies, where I
                explored the basics of HTML, CSS, and JavaScript. This initial
                exposure sparked a deep interest in creating interactive and
                user-friendly web applications. I am particularly excited about
                the prospect of mastering both front-end and back-end
                development, and I am committed to developing my skills in
                languages and frameworks like React, Node.js, Next.js and more.
                <br></br>
              </motion.p>
              <div className="pt-10 ">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0px 0px 8px rgb(255,255,255)',
                    boxShadow: '0px 0px 8px rgb(255,255,255)',
                  }}
                  className="w-40 h-10 border rounded-full bg-gradient-to-r from-purple-950 via-purple-800 to-slate-600 text-slate-50"
                >
                  <a download href="./cv/Rishab's resume.pdf">
                    Download CV
                  </a>
                </motion.button>
              </div>
            </div>
            <div className="h-screen overflow-hidden">
              <div className="absolute z-10 h-96">
                <motion.img
                  whileInView={{ opacity: 1, x: 0, scale: 0.8 }}
                  initial={{ opacity: 1, x: 100, scale: 0.8 }}
                  transition={{ duration: 1.5 }}
                  className=""
                  src="../images/image.png"
                  alt=""
                />
              </div>
              <div className="absolute z-0">
                <motion.img
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 1, x: 100 }}
                  transition={{ duration: 1.5 }}
                  src="../images/stack2.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="tech" className="w-full h-full bg-cover bg-parallax p-2">
          <Technologies />
        </div>
        <div id="contact" className="w-full h-full bg-cover bg-parallax p-2">
          <ContactMe />
        </div>
      </div>
    </div>
  )
}
