import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import '../styles/index.scss'

const IndexPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                sort: { fields: frontmatter___date, order: DESC },
                filter: {
                    frontmatter: { draft: { eq: false }},
                    fileAbsolutePath: {regex: "/(posts)/"}
                }
            ) {
                edges {
                    node {
                        excerpt(pruneLength: 200)
                        frontmatter {
                            date
                            title
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            {data.allMarkdownRemark.edges.map((edge) => {
                const tags = edge.node.frontmatter.tags.map(tag => { return tag.replace(/ /g,"-") });
                return (
                    <section key={edge.node.fields.slug}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <time className="post-date">{edge.node.frontmatter.date}</time>
                            <div className={`post-tags ${tags[0]}`}>{edge.node.frontmatter.tags}</div>
                            <div className="post-title">{edge.node.frontmatter.title}</div>
                            <div className="post-excerpt">{edge.node.excerpt}</div>
                        </Link>
                    </section>
                )
            })}
        </Layout>
    )
}

export default IndexPage