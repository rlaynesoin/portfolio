import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import logo from '../../assets/images/Merakai.svg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['T', 'h', 'i', 's', ' ', 'i', 's']
  const jobArray = [
    'M',
    'e',
    'r',
    'a',
    'k',
    'a',
    'i',
    ' ',
    'S',
    't',
    'u',
    'd',
    'i',
    'o',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>W</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>c</span>
            <span className={`${letterClass} _15`}>o</span>
            <span className={`${letterClass} _16`}>m</span>
            <span className={`${letterClass} _17`}>e</span>
            <span className={`${letterClass} _17`}>,</span>
            <br />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={20}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Software Developer / JavaScript / Digital Transformation</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="logo-container">
          <img
            className="solid-logo"
            src={logo}
            alt="JavaScript,  Developer"
            transform="translate(0 457) scale(.1 -.1)"
          />
        </div>
      </div>
    </>
  )
}

export default Home
