import React from "react"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

const GalleryItem = props => {
  return (
    <Col md={4}>
      <Card className="bg-dark text-white">
        <Card.Img src={props.image} alt="Card image" />
        <Card.ImgOverlay>Link</Card.ImgOverlay>
      </Card>
    </Col>
  )
}

export default GalleryItem
