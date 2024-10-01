import * as React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const PortfolioPage = () => {
  return (
    <>
        
        <Layout pageTitle="Portfolio">
            <p>The intention for this page is to show a portfolio for my different types of work, however the only things I have ready right now are video editing demos, so please enjoy the videos! </p>
            <h1>Video Editing Portfolio</h1>
            <h2>Demo 1</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EeCMLcCfOxE?si=jUNVwqWYd9XXltiK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br></br>
            <h2>Demo 2</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KoRJGTInt4E?si=U0FJLUrD9A4Z22Xi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br></br>
        </Layout>
        
    </>
  )
}

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage