import React from 'react';
// style
import styled from 'styled-components';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Resume = () => {
  return (
    <StyledResume
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='enter'
    >
      <div>{/* <h3 style={{color: 'white'}}>Download Resume</h3> */}</div>
      <div className='resume-box'>
        <div className='resume-bg-black'>
          <div className='resume-black-text'>
            <div className='contact-box'>
              <h2>Matt Harrison</h2>
              <h3>Software Developer</h3>
              <div className='resume-contact'>
                <hr />
                <div className='resume-address'>
                  <p>MattHarrison92@gmail.com</p>
                  <p>Huntsville, AL, USA</p>
                </div>
                <hr />
                <div className='links'>
                  <motion.a
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    href='https://github.com/Fittocode'
                  >
                    <motion.div className='brand-icon'>
                      <FontAwesomeIcon size='3x' icon={faGithub} />
                    </motion.div>
                  </motion.a>
                </div>
                <div className='links'>
                  <motion.a
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    href='https://www.linkedin.com/in/matt-harrison-5697b363/'
                  >
                    <motion.div className='brand-icon'>
                      <FontAwesomeIcon size='3x' icon={faLinkedin} />
                    </motion.div>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='resume-bg-white'>
          <div className='resume-text-format'>
            <div className='resume-sections'>
              <h3>Professional Experience</h3>
              <hr />
              <h4>WordPress Developer, UX/UI Designer</h4>
              <h5>Tape, LLC | June 2020 - Present | Arlington, VA</h5>
              <p>
                Designed and built a website with WordPress for a government
                contractor, which I continue to monitor and update:{' '}
                <a className='link-color' href='https://www.tape-llc.com'>
                  tape-llc.com
                </a>
              </p>
              <h4>Web Development Bootcamp, Full-Time</h4>
              <h5>Ironhack | Jan 2019 - Mar 2019 | Berlin, Germany</h5>
              <p>
                Full-Stack JavaScript Web Dev Course with focus on MERN stack
              </p>
              <h4>English Teacher, Technical Editor</h4>
              <h5>Freecom | Nov 2017 - Dec 2018 | Sendai, Japan</h5>
              <p>
                Taught medical English to Tohoku University medical students,
                which included medical terminology and patient-doctor
                communication
              </p>
              <p>
                Edited scientific papers to prepare Tohoku University
                researchers for publication and presentations at international
                conferences
              </p>
            </div>
            <div className='resume-sections'>
              <h3>Programming Skills (MERN)</h3>
              <hr />
              <h4>Languages</h4>
              <p>JavaScript(ES6), CSS, HTML</p>
              <h4>Libraries/Frameworks</h4>
              <p>
                React, Node.js, Express, Sass, Framer Motion, React-Spring,
                Gatsby.js, Styled Components, Canvas, Babel, Webpack, Bootstrap
              </p>
              <h4>Versioning/Deployment, CMS</h4>
              <p>
                Docker, Github, Netlify, Heroku, WordPress, Squarespace,
                SiteGround
              </p>
              <h4>Databases/API, Authentication</h4>
              <p>MongoDB (+ Atlas), Mongoose, Postman, Passport</p>
              <h4>Concepts</h4>
              <p>DOM, CRUD, AGILE, REST, Core Web Vitals</p>
            </div>
            <div className='resume-sections'>
              <h3>Projects</h3>
              <hr />
              <h4>
                <a
                  className='link-color'
                  href='https://mattharrisondev-social-app.herokuapp.com/'
                >
                  Facebook Clone
                </a>
              </h4>
              <h5>Environment: Express, Node, MongoDB Atlas, Passport, Sass</h5>
              <p>
                A full stack, social media node.js application connected to
                MongoDB Atlas, authenticated with Passport, and deployed to
                Heroku via Docker
              </p>
              <h4>
                <a
                  className='link-color'
                  href='https://zealous-kepler-ab4529.netlify.app'
                >
                  Journal App
                </a>
              </h4>
              <h5>Environment: React, Express, MongoDB Atlas, Sass</h5>
              <p>
                My main passion project at the moment, this twitter-style
                journal app focuses on algorithmic search functionality to
                filter through journal topics and their sub-entries. Work in
                progress.{' '}
              </p>
              <h4>
                <a
                  className='link-color'
                  href='https://gallant-heyrovsky-e92bf2.netlify.app/'
                >
                  Music Player
                </a>
              </h4>
              <h5>Environment: React, React Router, Sass</h5>
              <p>
                This music player was also built with React, styled with sass,
                and deployed on Netlify.
              </p>
            </div>
            <div
              className='resume-sections'
              style={{ paddingBottom: '1.5rem' }}
            >
              <h3>Education</h3>
              <hr />
              <h4>Bachelor of Arts, English</h4>
              <h5>Samford University | 2011 - 2015 | Birmingham, AL, USA </h5>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-image">
                    <motion.img variants={titleAnim} src={Matt2} alt="Resume" />
                </div> */}
    </StyledResume>
  );
};

const StyledResume = styled(motion.div)`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  color: white;
  overflow: hidden;
  padding: 0rem 0 2rem 0rem;
`;

export default Resume;
