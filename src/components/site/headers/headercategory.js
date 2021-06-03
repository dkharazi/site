import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import * as catStyles from '../../../styles/category.module.css'

const HeaderCategory = ({ icon, cat, title }) => {

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
        <div className={catStyles.header}>
            <div className={catStyles.container}>
                <div className={catStyles.headerTitle}>
                    <Link
                        className={catStyles.headerItem}
                        to="/"
                        activeClassName={catStyles.headerActive}
                    >
                        {data.site.siteMetadata.title}
                    </Link>
                </div>
                <nav>
                    <Link
                        className={catStyles.headerItem}
                        to="/about"
                        activeClassName={catStyles.headerActive}
                        partiallyActive={true}
                    >
                        About
                    </Link>
                    <Link
                        className={catStyles.headerItem}
                        to="/projects"
                        activeClassName={catStyles.headerActive}
                        partiallyActive={true}
                    >
                        Projects
                    </Link>
                    <Link
                        className={catStyles.headerItem}
                        to="/notes"
                        activeClassName={catStyles.headerActive}
                        partiallyActive={true}
                    >
                        Notes
                    </Link>
                </nav>
            </div>
            <div className={catStyles.title}>
                <img src={icon} alt={cat} height="100" width="100" />
                <h2>{title}</h2>
                <div className={catStyles.curve}>
                    <div className ={catStyles.curveContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 14" height="70" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                            <path>
                                <animate attributeName="d" values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z" repeatCount="indefinite" dur="25s" />
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCategory