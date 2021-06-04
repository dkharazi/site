import React, { useEffect, useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import LayoutNotes from '../components/site/layouts/layoutnotes'
import * as notesStyles from '../styles/notes.module.css'

import jsPng from '../img/jsIcon.png'
import mlPng from '../img/mlIcon.png'
import pyPng from '../img/pyIcon.png'
import dePng from '../img/deIcon.png'
import fnPng from '../img/fnIcon.png'

const NotesPage = () => {

    // Query slugs for categories of notes
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                filter: {
                    frontmatter: { draft: { eq: false }},
                    fileAbsolutePath: {regex: "/(?=.*\/notes\/)(?=^((?!_index).)*$)/"}
                }
            ) {
                distinct(field: fields___category)
            }
        }
    `)

    // Create states for y positions of each bubble
    const [rad, setRad] = useState(0);
    const [bubbleY1, setBubbleY1] = useState(0);
    const [bubbleY2, setBubbleY2] = useState(0);
    const [bubbleY3, setBubbleY3] = useState(0);
    const [bubbleY4, setBubbleY4] = useState(0);
    const [bubbleY5, setBubbleY5] = useState(0);

    // Create function for mapping radians to y position
    const interpFloat = (i, r) => { return 15 * Math.sin(0.25 * r + i) };

    // Create floating effect for each bubble
    useEffect(() => {
        setTimeout(() => setRad(rad+0.1), 10);
        setBubbleY1(interpFloat(1, rad));
        setBubbleY2(interpFloat(2, rad));
        setBubbleY3(interpFloat(3, rad));
        setBubbleY4(interpFloat(4, rad));
        setBubbleY5(interpFloat(5, rad));
    }, [rad]);

    // Create data of positions for each notes bubble
    const bubbles = [
        { x: -100, y: bubbleY1 },
        { x: -75, y: bubbleY2 },
        { x: -50, y: bubbleY3 },
        { x: -25, y: bubbleY4 },
        { x: 0, y: bubbleY5 }
    ];

    // Map slugs for notes to corresponding images
    const imgMap = {
        'de': dePng,
        'fn': fnPng,
        'js': jsPng,
        'ml': mlPng,
        'py': pyPng
    };

    return (
        <LayoutNotes>
                {data.allMarkdownRemark.distinct.map((cat, idx) => {
                    return (
                        <Link key={cat} to={`/notes/${cat}`} state={{ colorIdx: idx }}>
                            <div
                                className={`${notesStyles.notesItem} n${idx%5} h`}
                                style={{ transform: `translate(${bubbles[idx].x}%, ${bubbles[idx].y}%)` }}
                            >
                                <img src={imgMap[cat]} alt={cat} className={notesStyles.icon} />
                            </div>
                        </Link>
                    )
                })}
        </LayoutNotes>
    )
}

export default NotesPage;