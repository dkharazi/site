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
                role="Machine Learning Engineer"
                startDate="Jan 2019"
                endDate="Present"
                tech="Python, R"
                color="1"
            >
                <ul className={aboutStyles.description}>
                </ul>
            </ResumeItem>
            <ResumeItem
                company="MCPc"
                role="Data Science Consultant"
                startDate="Nov 2017"
                endDate="Jan 2019"
                tech="Python, R"
                color="1"
            >
                <ul className={aboutStyles.description}>
                    <li>Built a frontent prototype for performance evaluation of employees using Dash in Python</li>
                    <li>Built web service for predicting workplace safety using Flask for REST API calls</li>
                    <li>Trained SVM classifiers for web service using scikit-learn in Python</li>
                    <li>Performed data profiling and data design using an ETL methodology with SQL, Python, and R</li>
                </ul>
            </ResumeItem>
            <ResumeItem
                company="XLHost"
                role="Data Engineer"
                startDate="May 2015"
                endDate="Aug 2017"
                tech="JavaScript, Python"
                color="1"
            >
                <ul className={aboutStyles.description}>
                    <li>Built Flask applications for REST API calls using Python</li>
                    <li>Used HBase as backend for web apps</li>
                    <li>Experience in programming with RDDs using PySpark in Python</li>
                    <li>Developed Spark jobs for batch processing</li>
                    <li>Built features for website using ReactJS</li>
                </ul>
            </ResumeItem>

            <h3 className={`${aboutStyles.subject} t2`}>Education</h3>
            <ResumeItem
                company="Ohio State University"
                startDate="August 2014"
                endDate="May 2018"
                color="2"
            >
                <ul className={aboutStyles.description}>
                    <li>Co-founder of BlanketBooks</li>
                    <li>Advisor for Data Analytics Academic Path Peers</li>
                    <li>Researcher in Data Mining for Fisher College of Business</li>
                    <li>Teaching Assistant for CSE 2321 - Discrete Structures</li>
                </ul>
            </ResumeItem>

            <h3 className={`${aboutStyles.subject} t3`}>Community</h3>
            <ResumeItem
                company="Organizer"
                startDate="Aug 2016"
                endDate="Present"
                color="3"
            >
                <ul className={aboutStyles.description}>
                    <li>Coordinated Python and Hadoop workshops for 30+ students</li>
                    <li>Developed and documented study groups used for sharing various coding frameworks and practices</li>
                    <li>Hosted and ran 10 workshops about best-practices for git, databases, etc.</li>
                </ul>
            </ResumeItem>
            <ResumeItem
                company="Consultant"
                startDate="Aug 2016"
                endDate="Present"
                color="3"
            >
                <ul className={aboutStyles.description}>
                    <li>Created and configured databases for a small startup and open-source project</li>
                    <li>Designed recommendation algorithms for a web-hosting company and open-source project</li>
                    <li>Consulted for a large mid-western utility company using Python</li>
                    <li>Consulted for a large mid-western retailer using Python and R</li>
                </ul>
            </ResumeItem>
            <ResumeItem
                company="Advisor"
                startDate="Aug 2014"
                endDate="May 2018"
                color="3"
            >
                <ul className={aboutStyles.description}>
                    <li>Introduced Git to a non-technical audience in a small startup</li>
                    <li>Motivated the benefits of version control and containerization to IT professionals in Columbus</li>
                    <li>Mentored 40+ engineering students about the search process for internships and a healthy work/study/life balance</li>
                    <li>Became the primary point of contact for engineering students interested in data analytics at the Ohio State University</li>
                </ul>
            </ResumeItem>
        </Layout>
    )
}

export default AboutPage