const path = require('path')

const categoryData = {
    'js': {
        'title': 'JavaScript'
    },
    'ml': {
        'title': 'Machine Learning'
    },
    'py': {
        'title': 'Python'
    },
    'de': {
        'title': 'Data Engineering'
    }
}

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    
    // create fields for markdown files only
    if (node.internal.type === 'MarkdownRemark') {
        let slug = ''
        let reference = ''
        let category = ''
        let subCategory = ''

        if (node.fileAbsolutePath.includes('/notes/')) {  // md in notes
            slug = node.fileAbsolutePath.replace(/^.*\/notes\//,'').replace('.md','')
            reference = 'notes'
            const pathSegments = slug.split('/')
            category = pathSegments[0]
            subCategory = pathSegments[1]
            
        } else {  // md in blog
            slug = path.basename(node.fileAbsolutePath, '.md')
            reference = 'blog'
            category = 'blog'
            subCategory = 'blog'
        }
        
        // create slug field
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })

        // create field to indicate blog or notes directory
        createNodeField({
            node,
            name: 'reference',
            value: reference
        })

        // create field for category (e.g. python)
        createNodeField({
            node,
            name: 'category',
            value: category
        })

        // create field for subCategory (e.g. flask)
        createNodeField({
            node,
            name: 'subCategory',
            value: subCategory
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const notesTemplate = path.resolve('./src/templates/notes.js')
    const categoryTemplate = path.resolve('./src/templates/category.js')

    // query fields for any markdown files
    const mdRes = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                            reference
                        }
                    }
                }
            }
        }
    `)

    const dirRes = await graphql(`
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

    // create page from markdown files
    mdRes.data.allMarkdownRemark.edges.forEach((edge) => {
        if (edge.node.fields.reference == 'notes') {  // is a notes md
            createPage({
                component: notesTemplate,
                path: `/notes/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        } else {  // is a blog md
            createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }
    })

    // create page from categories
    dirRes.data.allMarkdownRemark.distinct.forEach((category) => {
        createPage({
            component: categoryTemplate,
            path: `/notes/${category}`,
            context: {
                cat: category,
                data: categoryData[category]
            }
        })
    })
}