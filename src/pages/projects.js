import React from 'react'
import Layout from "../components/layout"
import projectsStyles from "../styles/projects.module.css"
import mountainsPng from "../img/mountains.png"
import waveJpg from "../img/wave.jpg"
import mediaJpg from "../img/media.jpg"
import starryJpg from "../img/starrynight.jpg"
import musicJpg from "../img/music.jpg"

const ProjectsPage = () => {

    return (
        <Layout>
            <div className={`${projectsStyles.gallery}`}>
                <div className={projectsStyles.column}>
                    <div className={projectsStyles.item}>
                        <a href="http://www.google.com">
                            <img src={mountainsPng} alt="trips" />
                            <div className={projectsStyles.description}>
                                favorite trips
                            </div>
                        </a>
                    </div>
                    <div className={projectsStyles.item}>
                        <a href="http://www.google.com">
                            <img src={mediaJpg} alt="media" />
                            <div className={projectsStyles.description}>
                                media sentiment
                            </div>
                        </a>
                    </div>
                    <div className={projectsStyles.item}>
                        <a href="http://www.google.com">
                            <img src={musicJpg} alt="music" />
                            <div className={projectsStyles.description}>
                                music visualizer
                            </div>
                        </a>
                    </div>
                </div>
                <div className={projectsStyles.column}>
                    <div className={projectsStyles.item}>
                        <a href="http://www.google.com">
                            <img src={waveJpg} alt="soundWave" />
                            <div className={projectsStyles.description}>
                                sound waves
                            </div>
                        </a>
                    </div>
                    <div className={projectsStyles.item}>
                        <a href="http://www.google.com">
                            <img src={starryJpg} alt="starryNight" />
                            <div className={projectsStyles.description}>
                                style transfer
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsPage