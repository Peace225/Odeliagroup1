const Contact = require('../models/contactModel');

// Ajouter un nouveau contact
const addContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = new Contact({
      name,
      email,
      message,
    });

    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout du contact', error: error.message });
  }
};

// Récupérer tous les contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la récupération des contacts', error: error.message });
  }
};

module.exports = { addContact, getContacts };
