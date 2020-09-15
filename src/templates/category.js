import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SubCategory from '../components/subcategory'
import catStyles from '../styles/category.module.css'

import jsPng from '../img/js.png'
import mlPng from '../img/ml.png'
import pyPng from '../img/py.png'
import dePng from '../img/de.png'

export const data = graphql`
  query($cat: String!) {
    allMarkdownRemark(
        sort: { fields: frontmatter___weight, order: ASC },
        filter: {
            fields: { category: { eq: $cat } },
            fileAbsolutePath: {regex: "/(?=.*\/notes\/)/"}
        }

    ) {
        edges {
            node {
                frontmatter {
                    title
                    weight
                    subcategories
                    names
                }
                fields {
                    category
                    subCategory
                    slug
                }
            }
        }
    }
  }
`


const Category = ({ location, data, pageContext }) => {

    // Assign correct image to its page of subcategories
    let img;
    if (pageContext.cat.includes('js')) {
        img = jsPng;
    } else if (pageContext.cat.includes('ml')) {
        img = mlPng;
    } else if (pageContext.cat.includes('py')) {
        img = pyPng
    } else if (pageContext.cat.includes('de')) {
        img = dePng
    }

    // Retrieve files and their order for a category
    const catData = data.allMarkdownRemark.edges.filter((edge) => {
        return edge.node.fields.subCategory === '_index';
    })

    return (
        <Layout>
            <div className={catStyles.category}>
                <div className={`${catStyles.title} ${catStyles.colOne}`}>
                    <img src={img} alt={pageContext.cat} height="100" width="100" />
                    <h2>{pageContext.data.title}</h2>
                </div>
                <hr></hr>
                <div className={`${catStyles.subCatSection} ${catStyles.colTwo}`}>
                    {catData[0].node.frontmatter.subcategories.map((subCat, idx) => {
                        return (
                            <SubCategory
                                key={subCat}
                                category={pageContext.cat}
                                subCategory={subCat}
                                subCategoryNickname={catData[0].node.frontmatter.names[idx]}
                                pageData={data}
                                colorIdx={location.state.colorIdx}
                            />
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default Category