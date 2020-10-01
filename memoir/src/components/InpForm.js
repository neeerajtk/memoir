import React from 'react';
import {Form} from 'react-bootstrap';
import '../styles/InpForm.css';

function InpForm() {
    return (
        <div>
<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="20" />
  </Form.Group>
</Form>
        </div>
    )
}

export default InpForm;