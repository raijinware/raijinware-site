import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  
  return (
    <div className={container}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap" rel="stylesheet" />
      
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          
          <li className={navLinkItem}>
            <Link to="/blog/" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <body>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </body>
      <footer>
        <Link to="/about" className={navLinkText}>
          About
        </Link>
      </footer>
    </div>
  )
}

export default Layout