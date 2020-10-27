import React from 'react'
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../../components/layout"
import projectsStyles from "../../styles/projects.module.css"

const ProjectsPage = () => {

    const data = useStaticQuery(graphql`
        query {
            mountains: file(relativePath: { eq: "img/mountains.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            media: file(relativePath: { eq: "img/media.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            music: file(relativePath: { eq: "img/music.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            wave: file(relativePath: { eq: "img/wave.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            star: file(relativePath: { eq: "img/starrynight.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <div className={`${projectsStyles.gallery}`}>
                <div className={projectsStyles.column}>
                    <div className={projectsStyles.item}>
                        <Link to={`/projects/trips`}>
                            <Img fluid={data.mountains.childImageSharp.fluid} alt="trips" />
                            <div className={projectsStyles.description}>
                                favorite trips
                            </div>
                        </Link>
                    </div>
                    <div className={projectsStyles.item}>
                        <Link to={`/construction`}>
                            <Img fluid={data.media.childImageSharp.fluid} alt="media" />
                            <div className={projectsStyles.description}>
                                media sentiment
                            </div>
                        </Link>
                    </div>
                    <div className={projectsStyles.item}>
                        <Link to={`/construction`}>
                            <Img fluid={data.music.childImageSharp.fluid} alt="music" />
                            <div className={projectsStyles.description}>
                                music visualizer
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={projectsStyles.column}>
                    <div className={projectsStyles.item}>
                        <Link to={`/projects/waves`}>
                            <Img fluid={data.wave.childImageSharp.fluid} alt="soundWave" />
                            <div className={projectsStyles.description}>
                                sound waves
                            </div>
                        </Link>
                    </div>
                    <div className={projectsStyles.item}>
                        <Link to={`/construction`}>
                            <Img fluid={data.star.childImageSharp.fluid} alt="starryNight" />
                            <div className={projectsStyles.description}>
                                style transfer
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsPage