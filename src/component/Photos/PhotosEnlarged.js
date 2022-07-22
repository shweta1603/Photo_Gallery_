import React from 'react';                 //rfc
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
const PhotoEnlarged = () => {
    const [photoURL, setPhotoURL] =useState('')
    const {id} = useParams()
    useEffect(() => {
        axios
        .get(`https://picsum.photos/id/${id}/info`)         
        .then((res) => setPhotoURL(res.data.download_url))
        .catch((err) => console.log(err.message))
    },[id])
    
    let styles={
        imgStyle: {
        width: '90vw',
        height:'80vh',
        margin:'20px'
    },
    spinnerDiv:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        height:'90vh'
    }
    }
    return (
        <div className="enlarge" >
        {photoURL ? (
            <img src={photoURL} style={styles.imgStyle} alt='expanded-view'/>
        ) : (
            <div style={styles.spinnerDiv}>
               <Spinner animation="border"/>
            </div>   // loader/spinner while loading anything 
        )}
        </div>
    );
}

export default PhotoEnlarged;
