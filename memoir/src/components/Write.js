import React,{useState} from 'react'
import {Card} from 'react-bootstrap';
import '../styles/Write.css';


function Write() {
    const [date,setDate]= useState(Date().toLocaleString().slice(0,21));
    return (
        <div>
            <Card>
            <Card.Body>
                <Card.Title>Note Heading</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
                    </div>
    )
}

export default Write;