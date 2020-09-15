import React from 'react'
import Layout from "../components/layout"
import ResumeItem from "../components/resume"
import aboutStyles from "../styles/about.module.css"

const AboutPage = () => {

    return (
        <Layout>
            <div className={aboutStyles.summary}>
                <div className={aboutStyles.title}>
                    <h3>About Me</h3>
                </div>
                <p>I live in Columbus, Ohio and work on a data science team at Abercrombie.</p>
                <p>Before Abercrombie, I worked as a consultant while studying statistics and computer science at Ohio State University (Class of 2018). During college and high school, I made iOS apps and got involved in programming competitions. I started programming in JavaScript and Java when I was 14, but now I usually write code in Python. Most of my experience in the last few years has been machine learning, data engineering, and backend development. I occasionally write code for fun in my spare time.</p>
                <p>What about stuff outside of technology?</p>
                <ul>
                    <li>My two passions in life: soccer and Indian food</li>
                    <li>On top of that, I enjoy skiing when I get the chance</li>
                    <li>I usually listen to either soft rock, indie pop, or lo-fi hip hop</li>
                    <li>I've done a triathlon and a few bike tours</li>
                    <li>I'm halfway through visiting all 50 U.S. states</li>
                    <li>I played the piano actively for 10+ years</li>
                    <li>I want to stop eating meat one day</li>
                    <li>My favorite tv show is The Office</li>
                </ul>
            </div>

            <h3 className={`${aboutStyles.subject} t1`}>Experience</h3>
            <ResumeItem
                company="Abercrombie"
                role="Backend Developer"
                startDate="Jan 2016"
                endDate="May 2017"
                tech="JavaScript"
                color="1"
            >
                <ul className={aboutStyles.description}>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                </ul>
            </ResumeItem>
            <ResumeItem
                company="MCPc"
                role="Data Science Consultant"
                startDate="Oct 2015"
                endDate="March 2016"
                tech="Python"
                color="1"
            >
                <ul className={aboutStyles.description}>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                </ul>
            </ResumeItem>
            <ResumeItem
                company="XLHost"
                role="Data Engineer"
                startDate="Sept 2013"
                endDate="June 2014"
                tech="Java"
                color="1"
            >
                <ul className={aboutStyles.description}>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                </ul>
            </ResumeItem>

            <h3 className={`${aboutStyles.subject} t2`}>Education</h3>
            <ResumeItem
                company="Ohio State University"
                role="Backend Developer"
                startDate="Jan 2016"
                endDate="May 2017"
                tech="JavaScript"
                color="2"
            >
                <ul className={aboutStyles.description}>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                </ul>
            </ResumeItem>

            <h3 className={`${aboutStyles.subject} t3`}>Community</h3>
            <ResumeItem
                company="Advisor"
                role="Backend Developer"
                startDate="Jan 2016"
                endDate="May 2017"
                tech="JavaScript"
                color="3"
            >
                <ul className={aboutStyles.description}>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                </ul>
            </ResumeItem>
            <ResumeItem
                company="Organizer"
                role="Backend Developer"
                startDate="Jan 2016"
                endDate="May 2017"
                tech="JavaScript"
                color="3"
            >
                <ul className={aboutStyles.description}>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                </ul>
            </ResumeItem>
            <ResumeItem
                company="Public Speaking"
                role="Backend Developer"
                startDate="Jan 2016"
                endDate="May 2017"
                tech="JavaScript"
                color="3"
            >
                <ul className={aboutStyles.description}>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                    <li>Built the front end for features such as </li>
                    <li>Developed a prototype iPhone application to transfer data async</li>
                </ul>
            </ResumeItem>
        </Layout>
    )
}

export default AboutPage