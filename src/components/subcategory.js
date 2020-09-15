import React from 'react'
import { Link } from 'gatsby'
import subcatStyles from "../styles/subcategory.module.css"

const SubCategory = ({ category, subCategory, subCategoryNickname, pageData, colorIdx }) => {

    return (
        <div className={subcatStyles.subcategory}>
            <div className={`${subcatStyles.title} n${colorIdx}`}>
                <h3>{subCategoryNickname}</h3>
            </div>
            <div className={`${subcatStyles.items}`}>
                <ul>
                    {pageData.allMarkdownRemark.edges.map((edge) => {
                        let subCatJSX = null;
                        if (edge.node.fields.category === category && edge.node.fields.subCategory === subCategory) {
                            subCatJSX = (
                                <li key={edge.node.fields.slug}>
                                    <Link to={`/notes/${edge.node.fields.slug}`}>
                                        {edge.node.frontmatter.title}
                                    </Link>
                                </li>
                            )
                        }
                        return subCatJSX
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SubCategory