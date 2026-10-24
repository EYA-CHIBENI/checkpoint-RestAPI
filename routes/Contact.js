const express = require('express')

const { GetAllContacts, AddOneContact, DeleteOneContact, UpdateOneContact, GetOneContact } = require('../controllers/Contact')

const ContactRouter = express.Router()

ContactRouter.post('/addcontact', AddOneContact)
ContactRouter.get('/getcontacts', GetAllContacts)
ContactRouter.delete('/deletecontact/:id', DeleteOneContact)
ContactRouter.put('/updatecontact/:id', UpdateOneContact)
ContactRouter.get('/getcontact/:id', GetOneContact)





module.exports = ContactRouter