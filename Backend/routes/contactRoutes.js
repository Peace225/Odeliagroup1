const express = require('express');
const { addContact, getContacts } = require('../controllers/contactController');
const router = express.Router();

// Route pour ajouter un nouveau contact
router.post('/', addContact);

// Route pour récupérer tous les contacts (si nécessaire pour un admin, par exemple)
router.get('/', getContacts);

module.exports = router;
