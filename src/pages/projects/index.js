import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../../components/site/layouts/layout"
import * as projectsStyles from "../../styles/projects.module.css"

const ProjectsPage = () => {

    const data = useStaticQuery(graphql`
        query {
            mountains: file (relativePath: {eq: "img/mountains.png"}) {
                childImageSharp {
                    gatsbyImageData (layout: CONSTRAINED, width: 700, placeholder: BLURRED)
                }
            }
            media: file(relativePath: { eq: "img/media.jpg" }) {
                childImageSharp {
                    gatsbyImageData (layout: CONSTRAINED, width: 700, placeholder: BLURRED)
                }
            }
            music: file(relativePath: { eq: "img/music.jpg" }) {
                childImageSharp {
                    gatsbyImageData (layout: CONSTRAINED, width: 700, placeholder: BLURRED)
                }
            }
            wave: file(relativePath: { eq: "img/wave.jpg" }) {
                childImageSharp {
                    gatsbyImageData (layout: CONSTRAINED, width: 700, placeholder: BLURRED)
                }
            }
            star: file(relativePath: { eq: "img/starrynight.jpg" }) {
                childImageSharp {
                    gatsbyImageData (layout: CONSTRAINED, width: 700, placeholder: BLURRED)
                }
            }
            btyd: file(relativePath: { eq: "img/btyd.jpg" }) {
                childImageSharp {
                    gatsbyImageData (layout: CONSTRAINED, width: 700, placeholder: BLURRED)
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
                            <GatsbyImage image={data.mountains.childImageSharp.gatsbyImageData} alt="trips" />
                            <div className={projectsStyles.description}>
                                favorite trips
                            </div>
                        </Link>
                    </div>
                    <div className={projectsStyles.item}>
                        <Link to={`/projects/news`}>
                            <GatsbyImage image={data.media.childImageSharp.gatsbyImageData} alt="media" />
                            <div className={projectsStyles.description}>
                                media topics
                            </div>
                        </Link>
                    </div>
                    <div className={projectsStyles.item}>
                        <Link to={`/construction`}>
                            <GatsbyImage image={data.btyd.childImageSharp.gatsbyImageData} alt="btyd" />
                            <div className={projectsStyles.description}>
                                churn & clv
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={projectsStyles.column}>
                    <div className={projectsStyles.item}>
                        <Link to={`/projects/waves`}>
                            <GatsbyImage image={data.wave.childImageSharp.gatsbyImageData} alt="soundWave" />
                            <div className={projectsStyles.description}>
                                sound waves
                            </div>
                        </Link>
                    </div>
                    <div className={projectsStyles.item}>
                        <Link to={`/projects/style-transfer`}>
                            <GatsbyImage image={data.star.childImageSharp.gatsbyImageData} alt="starryNight" />
                            <div className={projectsStyles.description}>
                                style transfer
                            </div>
                        </Link>
                    </div>
                    <div className={projectsStyles.item}>
                        <Link to={`/construction`}>
                            <GatsbyImage image={data.music.childImageSharp.gatsbyImageData} alt="music" />
                            <div className={projectsStyles.description}>
                                music visualizer
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsPage