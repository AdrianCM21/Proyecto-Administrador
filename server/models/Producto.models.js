const mongoose = require("mongoose");

const ProductoShema = new mongoose.Schema({
    titulo: { 
        type: String,
        required:true
    },
    precioC: { 
        type: Number,
        required:true
    },
    precioV: { 
        type: Number,
        required:true
    },
    unidades: { 
        type: Number,
        required:true
    },
    description: { 
        type: String,
        required:true 
    },
    tipo: { 
        type: String,
        required:true 
    },
    stockCritico: { 
        type: Number,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
}, { timestamps: true });

ProductoShema.set('toJSON',{
    transform:(document,returnObject)=>{
        returnObject.id=returnObject._id
        delete returnObject._id
        delete returnObject._v
    }
})


module.exports.Productos = mongoose.model('productos',ProductoShema);