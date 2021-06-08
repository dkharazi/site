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
    },
    'fn': {
        'title': 'Business and Finance'
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
    const notesEntryTemplate = path.resolve('./src/templates/entry.js')
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
                            category
                            subCategory
                        }
                        frontmatter {
                            title
                            weight
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
    const edges = mdRes.data.allMarkdownRemark.edges;
    edges.forEach((edge, idx) => {
        if (edge.node.fields.reference == 'notes') {  // is a notes md
            let currWt = edge.node.frontmatter.weight;
            let nextWt = edges[idx+1] == null ? null : edges[idx+1].node.frontmatter.weight;
            let prevSlug = null;
            let prevTitle = null;
            let nextSlug = null;
            let nextTitle = null;

            if (nextWt < currWt) {
                // no next, prev
                prevSlug = edges[idx-1].node.fields.slug;
                prevTitle = edges[idx-1].node.frontmatter.title;
            } else if ((currWt === 1 && nextWt > currWt) || (currWt > 1 && nextWt == null)) {
                // next, no prev
                nextSlug = edges[idx+1].node.fields.slug;
                nextTitle = edges[idx+1].node.frontmatter.title;
            } else if ((currWt === 1 && nextWt === 1) || (currWt === 1 && nextWt == null)) {
                // no next, no prev
            } else if (nextWt > currWt) {
                // next, prev
                prevSlug = edges[idx-1].node.fields.slug;
                prevTitle = edges[idx-1].node.frontmatter.title;
                nextSlug = edges[idx+1].node.fields.slug;
                nextTitle = edges[idx+1].node.frontmatter.title;
            }

            createPage({
                component: notesEntryTemplate,
                path: `/notes/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug,
                    previousSlug: prevSlug,
                    nextSlug: nextSlug,
                    previousTitle: prevTitle,
                    nextTitle: nextTitle
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