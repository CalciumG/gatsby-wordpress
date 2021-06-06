import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h4>Posts</h4>
      {data.allWpPage.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <p>{node.date}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allWpPage {
      edges {
        node {
          id
          date
          title
          slug
        }
      }
    }
  }
`
