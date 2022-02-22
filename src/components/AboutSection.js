import React from 'react';
import Matt2 from '../img/IMG_0940.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import { Link } from 'react-router-dom';
// import { photoAnim } from '../animation'

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  const headlineAnim = {
    hidden: { y: 200 },
    show: { y: 0, transition: { duration: 1 } },
  };
  const container = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        staggerChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  };

  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='enter'
    >
      <motion.div
        className='about-layout'
        variants={container}
        initial='hidden'
        animate='show'
      >
        <div className='about-description'>
          <div className='title'>
            <div className='hide'>
              <motion.h2 variants={headlineAnim}>Hi, I'm Matt</motion.h2>
            </div>
            <div className='hide'>
              <motion.h2 variants={headlineAnim}>
                <span> Full Stack</span> Developer
              </motion.h2>
            </div>
          </div>
          <motion.p variants={titleAnim} style={{ color: 'white' }}>
            This Portfolio was built with{' '}
            <span style={{ color: '#61dafb' }}>React</span>
          </motion.p>
          <div className='buttons'>
            <Link to={'/projects'}>
              <motion.button
                whileHover={{ y: -10, transition: { duration: 0.02 } }}
                variants={titleAnim}
                style={{ marginRight: '.5rem' }}
              >
                Projects
              </motion.button>
            </Link>
            <Link to={'/resume'}>
              <motion.button
                whileHover={{ y: -10, transition: { duration: 0.02 } }}
                variants={titleAnim}
                style={{ marginRight: '.5rem' }}
              >
                Resume
              </motion.button>
            </Link>
            <div className='icons'>
              <motion.a
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                href='https://github.com/Fittocode'
                className='brand-icon'
              >
                <motion.div className='brand-icon' variants={titleAnim}>
                  <FontAwesomeIcon size='3x' icon={faGithub} />
                </motion.div>
              </motion.a>
              <motion.a
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                href='https://www.linkedin.com/in/matt-harrison-5697b363/'
                className='brand-icon'
              >
                <motion.div className='brand-icon' variants={titleAnim}>
                  <FontAwesomeIcon
                    className='brand-icon'
                    size='3x'
                    icon={faLinkedin}
                  />
                </motion.div>
              </motion.a>
            </div>
          </div>
        </div>
        <div className='about-image'>
          <motion.img
            variants={titleAnim}
            src={Matt2}
            alt='Matt Harrison portrait'
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
