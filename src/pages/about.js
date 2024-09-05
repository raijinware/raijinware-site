import * as React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <>
        
        <Layout pageTitle="About Me">
            <p>Hi! My name is Quentin, also known by my screen name as Raijin! This is my website.</p>
            <p>I am a graduate from Eastern Kentucky University with a degree in computer science. I was a General Computer Science concentration, so I was given a lot of practice building apps, websites, games, and even projects in artificial intelligence!</p>
            <hr></hr>
            <p>While I was at Eastern Kentucky University also competed in CCDC cybersecurity competitions. cybersecurity is a huge hobby for me, so you can often find me doing rooms on TryHackMe, reading books, and watching YouTube videos about cybersecurity.</p>
            <hr></hr>
            <p>If you are interested in the upward potential that I can bring to your company, or if you just want to know more about me, you can find me at these links:</p>
            <br></br>
            <a href='https://www.linkedin.com/in/quentin-p-529773230' target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br></br>
            <br></br>
            <br></br>
            <a href='https://www.github.com/raijinware' target="_blank" rel="noopener noreferrer">GitHub</a>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <StaticImage
            alt="An image of Quentin smiling in front of a lake on a nice day"
            src="../images/Quentin.jpg"
            />
            <hr></hr>
        </Layout>
        
    </>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage