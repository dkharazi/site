import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from "../../styles/footer.module.css"
import gitSvg from "../../img/github.svg"
import liSvg from "../../img/linkedin.svg"
import soSvg from "../../img/stackoverflow.svg"
import rssSvg from "../../img/rss.svg"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    siteUrl
                }
            }
        }
    `)

    return (
        <footer>
            <p>Designed and developed by {data.site.siteMetadata.author} © 2020</p>
            <p>Built with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a></p>
            <div className={footerStyles.profiles}>
                <a href="https://www.github.com/dkharazi" target="_blank" rel="noreferrer">
                    <img src={gitSvg} width="25" height="25" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/darius-kharazi-96bb45128/" target="_blank" rel="noreferrer">
                    <img src={liSvg} width="25" height="25" alt="linkedin" />
                </a>
                <a href="https://stackoverflow.com/users/12777044/dkhara" target="_blank" rel="noreferrer">
                    <img src={soSvg} width="25" height="25" alt="stackoverflow" />
                </a>
                <a href={`${data.site.siteMetadata.siteUrl}/rss.xml`} target="_blank" rel="noreferrer">
                    <img src={rssSvg} width="25" height="25" alt="rss" />
                </a>
            </div>
        </footer>
    )
}

export default Footer