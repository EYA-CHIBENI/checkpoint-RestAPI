import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addconetact, editcontact, getonecontact } from '../Redux/Actions';
const EditContact = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getonecontact(id))
    }, [])

    const contact = useSelector(state => state.contact)
    const [name, setName] = useState(contact.name)
    const [age, setAge] = useState(contact.age)
    const [email, setEmail] = useState(contact.email)

    useEffect(() => {
        setName(contact.name)
        setEmail(contact.email)
        setAge(contact.age)
    }, [contact])

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="email" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control value={age} onChange={(e) => setAge(e.target.value)} type="email" placeholder="Enter Age" />
                </Form.Group>
                <Button onClick={(e) => { e.preventDefault(); dispatch(editcontact(id,{name, age, email }, navigate)) }} variant="primary" type="submit">
                    Edit
                </Button>
            </Form>
        </div>
    )
}

export default EditContact