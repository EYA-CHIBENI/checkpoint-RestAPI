import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletecontact } from '../Redux/Actions';
const ContactCard = ({ OneContact }) => {
  const dispatch=useDispatch()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{OneContact.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{OneContact.age}</Card.Subtitle>
        <Card.Text>{OneContact.email}</Card.Text>
         <Button onClick={()=> dispatch(deletecontact(OneContact._id))} variant="danger">Delete</Button>
          <Link to={`/EditContact/${OneContact._id}`} ><Button variant="warning">Update</Button></Link>
      </Card.Body>
    </Card>
  )
}

export default ContactCard