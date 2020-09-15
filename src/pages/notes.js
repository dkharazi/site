import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Link, graphql, useStaticQuery } from 'gatsby'
import NotesLayout from '../components/noteslayout'
import notesStyles from '../styles/notes.module.css'

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
        <NotesLayout>
            <div className={notesStyles.notes}>
                {data.allMarkdownRemark.distinct.map((cat, idx) => {
                    return (
                        <Link key={cat} to={`/notes/${cat}`} state={{ colorIdx: idx }}>
                            <animated.div
                                className={ `${notesStyles.notesItem} n${idx%4} h` }
                                style={{ transform: radians.interpolate(interp(idx)) }}
                            >
                                <p>{cat}</p>
                            </animated.div>
                        </Link>
                    )
                })}
            </div>
        </NotesLayout>
    )
}

export default NotesPage