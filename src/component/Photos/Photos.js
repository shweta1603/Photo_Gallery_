// https://picsum.photos/
// https://picsum.photos/v2/list
import { useState,useEffect } from 'react'
import {Card, Container,Row, Col, Button, Spinner} from 'react-bootstrap'
import './Photos.css'
import axios from "axios"
import { Link } from 'react-router-dom'   //for routing the page i.e showing diffrent component on the page
const PhotosFunc = () => {
    const [photos, setPhotos]= useState([])
    const [showAllPhotos, setShowAll]=useState(false)

      useEffect(() => {
        axios
        .get('https://picsum.photos/v2/list')         
        .then((res) => setPhotos(res.data))
        .catch((err) => console.log(err.message))
      }, []);

        return (
            <div>
             <Container className='my-3'>
                 <Row>
                 <Col md={10}>      
                <h1 className='display-1'>Photos </h1>
                <p className='lead'>Explore range of images from Unsplash</p>
                </Col>
                {/* <Col md={2}>
                <Button variant='dark' size='lg' onClick={() => setShowAll(!showAllPhotos)}>
                    {showAllPhotos ? 'Hide' : 'Show'} All Photos</Button>
                </Col> */}
                </Row>
                <hr></hr> 
                <Row>
                {/* {showAllPhotos && photos.map(photo => (  */}
                    { photos.length ? photos.map(photo => (               //conditional redering
                        <Col md={4}  className="photos-card" key={photo.id}>     
                        <Card className='card'>
                            <Card.Img variant="top" src={photo.download_url} />
                            <Card.Body>
                                <Card.Title>{photo.author}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a className="btn btn-dark"href={photo.url} style={{marginRight: '9px'}}>View more details</a>
                                {/* to make photo dynamic and veiw enlarge image*/}
                                <Link className="btn btn-dark"  to={`/photos/${photo.id}`}> View Enlaged Image</Link>
                            </Card.Body>
                        </Card>
                         </Col>
                    )) : (
                    <div style={{ display:'flex',justifyContent:'center', alignItems: 'center', height: '90vh'}}>
                        <Spinner animation="border"  />
                    </div>   // loader/spinner while loading anything 
                    )
                }
                </Row>
            </Container>   
            </div >
        );
}

export default PhotosFunc;
