const Contact = require('../models/Contact')
exports.AddOneContact = async (req, res) => {
    try {
        const found = await Contact.findOne({ email: req.body.email })
        if (found) {
            return res.status(400).send('email already exists')
        }
        const newcontact = new Contact(req.body)
        await newcontact.save()
        res.status(200).send({ msg: 'contact added', newcontact })
    } catch (error) {
        res.status(500).send('could not add contact')
    }
}
exports.GetAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find()
        res.status(200).send({ msg: 'list of contacts', contacts })
    } catch (error) {
        res.status(500).send('could not get contacts')
    }
}
exports.DeleteOneContact = async (req, res) => {
    try {
        const { id } = req.params
        await Contact.findByIdAndDelete(id)
        res.status(200).send('the contact is deleted')
    } catch (error) {
        res.status(500).send('could not delete contact')
    }
}
exports.UpdateOneContact = async (req, res) => {
    try {
        const { id } = req.params
        const updatedcontact = await Contact.findByIdAndUpdate(id, { $set: req.body })
        res.status(200).send({ msg: 'contact updated', updatedcontact })
    } catch (error) {
        res.status(500).send('could not update contact')
    }
}
exports.GetOneContact = async (req, res) => {
    try {
        const { id } = req.params
        const found = await Contact.findById(id)
        res.status(200).send({ msg: 'The contact', found })
    } catch (error) {
        res.status(500).send('could not get contacts')
    }
}