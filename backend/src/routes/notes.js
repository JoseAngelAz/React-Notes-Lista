const {Router} = require('express');
const router = Router();
const {getNotes,createNote,getNote,updateNote,deleteNote} = require('../controllers/notes.controller');

router.route('/')
//Mostrar Notas
.get(getNotes)
//Crear Notas
.post(createNote)


router.route('/:id')
//Mostrar Nota por Id
.get(getNote)
//Actualizar nota
.put(updateNote)
//Eliminar Nota
.delete(deleteNote)





module.exports = router;