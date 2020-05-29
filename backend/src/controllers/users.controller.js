const userCtrl = {}
const User = require('../models/User');

//CONSULTAR USUARIOS
userCtrl.getUsers = async(req,res)=>{
    const users = await User.find();    
    res.json(users)
}

//CONSULTAR POR ID
userCtrl.getUser = async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.json(user)
}

//CREAR USUARIO
userCtrl.createUser = async(req,res)=>{
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json({message:'PUT- Usuario GUARDADO'})
};

//ACTUALIZAR USUARIO
userCtrl.updateUser = async(req,res)=>{
    const userupdated = {username} = req.body;
    await User.findOneAndUpdate({_id:req.params.id},userupdated);
    res.json({message:'PUT- Usuario Actualizado'})
};

//BORRAR USUARIO
userCtrl.deleteUser = async(req,res)=>{
    const user = await User.findOneAndDelete({_id:req.params.id});
    res.json({message:'DELETE- Usuario ELIMINADO'})
};

module.exports = userCtrl;

