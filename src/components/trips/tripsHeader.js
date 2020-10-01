import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "../../styles/header.module.css"

const TripsHeader = ({ mastDOM }) => {
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
    <header ref={mastDOM}>
      <div className="container">
        <div className={headerStyles.title}>
          <Link
            className={headerStyles.item}
            to="/"
            activeClassName={headerStyles.active}
          >
            {data.site.siteMetadata.title}
          </Link>
        </div>
        <nav>
          <Link
            className={headerStyles.item}
            to="/about"
            activeClassName={headerStyles.active}
            partiallyActive={true}
          >
            About
          </Link>
          <Link
            className={headerStyles.item}
            to="/projects"
            activeClassName={headerStyles.active}
            partiallyActive={true}
          >
            Projects
          </Link>
          <Link
            className={headerStyles.item}
            to="/notes"
            activeClassName={headerStyles.active}
            partiallyActive={true}
          >
            Notes
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default TripsHeader;
