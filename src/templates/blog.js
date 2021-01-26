import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/site/layouts/layout'
import blogStyles from "../styles/blog.module.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug:{eq:$slug}}) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = ({data}) => {
    return (
        <Layout>
            <div className={blogStyles.post}>
              <h1>{data.markdownRemark.frontmatter.title}</h1>
              <div className={blogStyles.date}>Written on {data.markdownRemark.frontmatter.date}</div>
              <div className={blogStyles.blogHtml} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
            </div>
        </Layout>
    )
}

export default Blog