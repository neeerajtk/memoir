import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import '../styles/InpForm.css';

function InpForm() {
  const [date,setDate]= useState(Date().toLocaleString().slice(0,21));

    return (
        <div>
<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>[ {date} ]</Form.Label>
    <Form.Control type="email" placeholder="Diary Title" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    {/* <Form.Label>Example textarea</Form.Label> */}
    <Form.Control as="textarea" rows="20" placeholder="Diary Content" />
  </Form.Group>
</Form>
        </div>
    )
}

export default InpForm;