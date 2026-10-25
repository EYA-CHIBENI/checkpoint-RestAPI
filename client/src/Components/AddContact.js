import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addconetact } from '../Redux/Actions';
const AddContact = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} type="email" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control onChange={(e) => setAge(e.target.value)} type="email" placeholder="Enter Age" />
        </Form.Group>
        <Button onClick={(e) => { e.preventDefault(); dispatch(addconetact({ name, age, email }, navigate)) }} variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  )
}

export default AddContact