const {Router}  = require('express');
const router = Router();
const { 
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote } = require('../controllers/notes.controller')
const { isAuthenticated } = require('../helpers/auth');

// Nueva nota
router.get('/notes/add',isAuthenticated, renderNoteForm)
router.post('/notes/new-note', isAuthenticated, createNewNote)

// Obtener todas las notas
router.get('/notes', isAuthenticated, renderNotes)

// Editar nota
router.get('/notes/edit/:id', isAuthenticated, renderEditForm)
router.put('/notes/edit/:id', isAuthenticated, updateNote)

// Borrar Nota
router.delete('/notes/delete/:id', isAuthenticated, deleteNote)

module.exports = router