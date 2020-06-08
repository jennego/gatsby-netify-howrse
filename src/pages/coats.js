import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GalleryItem from "../components/galleryItem"
import Row from "react-bootstrap/Row"

const Coats = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "coats" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                image
                limited
                intro
                tags
                title
                use
                link
                notes
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Row noGutters={true}>
      {console.log(data)}
      {data.allFile.edges.map(({ node }) => (
        <GalleryItem
          image={node.childMarkdownRemark.frontmatter.image}
        ></GalleryItem>
      ))}
    </Row>
  )
}

export default Coats
