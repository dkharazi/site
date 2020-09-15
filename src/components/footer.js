import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import footerStyles from "../styles/footer.module.css"
import gitSvg from "../img/github.svg"
import liSvg from "../img/linkedin.svg"
import soSvg from "../img/stackoverflow.svg"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer>
            <p>Designed and developed by {data.site.siteMetadata.author} © 2020</p>
            <p>Built with <Link to="https://www.gatsbyjs.com/">Gatsby</Link></p>
            <div className={footerStyles.profiles}>
                <a href="https://www.github.com/dkharazi" taget="_blank" rel="noopener">
                    <img src={gitSvg} width="25" height="25" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/darius-kharazi-96bb45128/" taget="_blank" rel="noopener">
                    <img src={liSvg} width="25" height="25" alt="linkedin" />
                </a>
                <a href="https://stackoverflow.com/users/12777044/dkhara" taget="_blank" rel="noopener">
                    <img src={soSvg} width="25" height="25" alt="stackoverflow" />
                </a>
            </div>
        </footer>
    )
}

export default Footer