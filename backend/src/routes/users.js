const {Router} = require('express');
const router = Router();
const {createUser,deleteUser,getUsers,updateUser,getUser} = require('../controllers/users.controller');

router.route('/')
//Mostrar Usuarios(FUNCIONA)
.get(getUsers)
//Crear Usuario(FUNCIONA)
.post(createUser)

router.route('/:id')
//Mostrar Usuario por Id(FUNCIONA)
.get(getUser)
//Actualizar Usuario(FUNCIONA)
.put(updateUser)
//Eliminar Usuario(FUNCIONA)
.delete(deleteUser)

module.exports = router;