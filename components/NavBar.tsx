import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export const NavBar = () => {
  const containers = (delay: any) => ({
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
      whileInView: { opacity: 1 },
    },
  })
  return (
    <motion.div
      variants={containers(0.2)}
      initial="hidden"
      animate="visible"
      className="border rounded-full w-full h-12 flex items-center"
    >
      <div className="text-slate-50 text-xl font-normal flex justify-evenly">
        <motion.div
          variants={containers(0.2)}
          initial="hidden"
          animate="visible"
          className="px-10 cursor-pointer"
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255,255,255)',
          }}
        >
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to={'tech'}
          >
            Technologies
          </Link>
        </motion.div>

        <motion.div
          variants={containers(0.2)}
          initial="hidden"
          animate="visible"
          className="px-10 cursor-pointer"
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255,255,255)',
          }}
        >
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to={'about'}
          >
            About
          </Link>
        </motion.div>

        {/* <motion.div
          variants={containers(0.2)}
          initial="hidden"
          animate="visible"
          className="px-10 cursor-pointer"
        >
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to={'tech'}
          >
            Projects
          </Link>
        </motion.div> */}

        <motion.div
          variants={containers(0.2)}
          initial="hidden"
          animate="visible"
          className="px-10 cursor-pointer"
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255,255,255)',
          }}
        >
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to={'contact'}
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
