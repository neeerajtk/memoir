import React,{useState} from 'react'
import Form from  './InpForm';
import {Card} from 'react-bootstrap';

import '../styles/Write.css';


function Write() {
    return (
        <div>
            <Card.Body>
                <Form/>
            </Card.Body>
                    </div>
    )
}

export default Write;