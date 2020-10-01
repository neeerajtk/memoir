import React,{useState} from 'react'
import Form from  './InpForm';
import {Card} from 'react-bootstrap';

import '../styles/Write.css';


function Write() {
    const [date,setDate]= useState(Date().toLocaleString().slice(0,21));
    return (
        <div>
            <Card.Body>
                <Form/>
            </Card.Body>
                    </div>
    )
}

export default Write;