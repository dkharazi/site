import React from 'react'
import * as resumeStyles from "../../styles/resume.module.css"

const ResumeItem = ({ company, role, startDate, endDate, tech, color, children }) => {
    return (
        <div className={`${resumeStyles.item} b${color}`}>
            <div className={`${resumeStyles.targetborder} c${color}`}>
                <div className={`${resumeStyles.targetdot} c${color}`} />
            </div>
            <div className={resumeStyles.company}>{company}</div>
            <div className={resumeStyles.role}>{role}</div>
            <div className={resumeStyles.date}>{startDate} - {endDate}</div>
            <div className={resumeStyles.tech}>{tech}</div>
            {children}
        </div>
    )
}

export default ResumeItem