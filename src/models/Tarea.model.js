const mongoose = require('mongoose');

const Tarea = new mongoose.Schema({
    titulo:String,
    descripcion:String,
},{
    timestamps:true
});

module.exports = mongoose.model("Tarea", Tarea);