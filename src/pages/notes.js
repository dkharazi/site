import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Link, graphql, useStaticQuery } from 'gatsby'
import LayoutNotes from '../components/site/layouts/layoutnotes'
import notesStyles from '../styles/notes.module.css'

import jsPng from '../img/jsIcon.png'
import mlPng from '../img/mlIcon.png'
import pyPng from '../img/pyIcon.png'
import dePng from '../img/deIcon.png'
import fnPng from '../img/fnIcon.png'

const NotesPage = () => {

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

    const imgMap = {
        'de': dePng,
        'fn': fnPng,
        'js': jsPng,
        'ml': mlPng,
        'py': pyPng
    }

    const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

    const { radians } = useSpring({
        to: async next => {
            while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true
    })

    return (
        <LayoutNotes>
            <div className={notesStyles.notes}>
                {data.allMarkdownRemark.distinct.map((cat, idx) => {
                    return (
                        <Link key={cat} to={`/notes/${cat}`} state={{ colorIdx: idx }}>
                            <animated.div
                                className={`${notesStyles.notesItem} n${idx%5} h`}
                                style={{ transform: radians.interpolate(interp(idx)) }}
                            >
                                <img src={imgMap[cat]} alt={cat} className={notesStyles.icon} />
                            </animated.div>
                        </Link>
                    )
                })}
            </div>
        </LayoutNotes>
    )
}

export default NotesPage