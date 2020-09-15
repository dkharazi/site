import React from 'react'
import { graphql } from 'gatsby'
import NotesPageLayout from '../components/notespagelayout'
import notesStyles from "../styles/notespage.module.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug:{eq:$slug}}) {
      frontmatter {
        title
      }
      html
    }
  }
`

const Notes = ({data}) => {
    return (
        <NotesPageLayout title={data.markdownRemark.frontmatter.title}>
            <div className={notesStyles.notes}>
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
            </div>
        </NotesPageLayout>
    )
}

export default Notes