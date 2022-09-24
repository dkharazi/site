import React from 'react'
import { graphql } from 'gatsby'
import LayoutCategory from '../components/site/layouts/layoutcategory'
import SubCategory from '../components/site/subcategory'
import * as catStyles from '../styles/category.module.css'

import jsPng from '../img/js.png'
import mlPng from '../img/ml.png'
import pyPng from '../img/py.png'
import dePng from '../img/de.png'
import bsPng from '../img/fn.png'

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

const Category = ({ data, pageContext }) => {

    // Assign correct image to its page of subcategories
    let img, col;
    if (pageContext.cat.includes('js')) {
        img = jsPng;
        col = 2;
    } else if (pageContext.cat.includes('ml')) {
        img = mlPng;
        col = 3;
    } else if (pageContext.cat.includes('py')) {
        img = pyPng;
        col = 4;
    } else if (pageContext.cat.includes('de')) {
        img = dePng;
        col = 1;
    } else if (pageContext.cat.includes('bs')) {
        img = bsPng;
        col = 0;
    }

    // Retrieve files and their order for a category
    const catData = data.allMarkdownRemark.edges.filter((edge) => {
        return edge.node.fields.subCategory === '_index';
    })

    return (
        <LayoutCategory icon={img} cat={pageContext.cat} title={pageContext.data.title}>
            <div className={catStyles.subcategories}>
                {catData[0].node.frontmatter.subcategories.map((subCat, idx) => {
                    return (
                        <SubCategory
                            key={subCat}
                            category={pageContext.cat}
                            subCategory={subCat}
                            subCategoryNickname={catData[0].node.frontmatter.names[idx]}
                            pageData={data}
                            colorIdx={col}
                        />
                    )
                })}
            </div>
        </LayoutCategory>
    )
}

export default Category