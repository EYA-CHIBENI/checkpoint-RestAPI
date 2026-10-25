import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallcontacts } from '../Redux/Actions'
import ContactCard from './ContactCard'
const Contacts = () => {
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(getallcontacts())
    }, []
  )
  const contacts = useSelector(state => state.contacts)
  return (
    <div>
   {
contacts.map((OneContact,i,t)=> <ContactCard key={OneContact._id} OneContact={OneContact} />)
    }
    </div>
  )
}

export default Contacts