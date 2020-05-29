const notesCtrl = {};
//modelo
const Note = require('../models/Note');
//CONSLULTAR NOTAS
notesCtrl.getNotes = async(req,res) => {
    const notes = await Note.find();//las notas

    res.json(notes);
}
//CREAR NOTA
notesCtrl.createNote = async(req,res)=>{
    const {title,content,date,author} = req.body;
    const newNote = new Note({
        title:title,
        content:content,
        date: date,
        author: author
    });
    await newNote.save();
    {res.json({message:'Nota Guardada'})}
}

//Mostrar una nota por ID
notesCtrl.getNote = async (req,res)=>{
    const note = await Note.findById(req.params.id);    
    {res.json(note)}
}
//ACTUALIZAR NOTA
notesCtrl.updateNote = async(req,res) =>{
    const noteupdated = {title, content,author,date} = req.body;
    await Note.findOneAndUpdate({_id:req.params.id},noteupdated);
    res.json({message:'nota actualizada'})
}
//BORRAR NOTA
notesCtrl.deleteNote = async(req,res) =>{
    const note = await Note.findOneAndDelete({_id:req.params.id});
    res.json({message:'Nota  ELIMINADA'});
}

module.exports = notesCtrl