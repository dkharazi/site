import React from 'react'
import { Link, graphql } from 'gatsby'
import LayoutEntry from '../components/site/layouts/layoutentry'
import * as entryStyles from "../styles/entry.module.css"


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

const NotesEntry = ({ data, pageContext }) => {
    let prev;
    let next;
    if (pageContext.previousSlug != null) {
      prev = (
          <Link to={`/notes/${pageContext.previousSlug}`}>
              <span>
                  <svg stroke="#195b8a" fill="#195b8a" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                  </svg>
                  <p>{pageContext.previousTitle}</p>
              </span>
          </Link>
      )
    }
    if (pageContext.nextSlug != null) {
        next = (
            <Link to={`/notes/${pageContext.nextSlug}`}>
                <span>
                    <p>{pageContext.nextTitle}</p>
                    <svg stroke="#195b8a" fill="#195b8a" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                    </svg>
                </span>
            </Link>
        )
    }

    let nextDesc = next == null ? null : "Next";
    let prevDesc = prev == null ? null : "Previous";

    return (
        <LayoutEntry title={data.markdownRemark.frontmatter.title}>
            <div className={entryStyles.notes}>
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
            </div>
            <div className={entryStyles.pagination}>
                <div className={entryStyles.desc}>
                    <div className={entryStyles.prevDesc}>{prevDesc}</div>
                    <div className={entryStyles.nextDesc}>{nextDesc}</div>
                </div>
                <div className={entryStyles.nextPrevPages}>
                    <div className={entryStyles.previous}>
                        {prev}
                    </div>
                    <div className={entryStyles.next}>
                        {next}
                    </div>
                </div>
            </div>
        </LayoutEntry>
    )
}

export default NotesEntry