const {Productos} = require('../models/Producto.models')
const {User} = require('../models/User.models');


module.exports.createProducto = async (req, res) => {
    try{
    const { titulo,precioC,precioV,unidades,description,tipo,stockCritico} = req.body;
    console.log( titulo,precioC,precioV,unidades,description,tipo,stockCritico,req.usuarios._id)
    const user = await User.find({_id:req.usuarios._id})
    const producto = await Productos.create({
        titulo,
        precioC,
        precioV,
        unidades,
        description,
        tipo,
        stockCritico,
        user:user[0]._id
    });
    await User.findOneAndUpdate({_id: user[0]._id}, {$push:{productos:producto._id}}, {new:true})
    res.json(user);
    
    } catch(err){
        res.status(400);
        res.json(err);
        
     } ;
}

module.exports.actualizarProductos = async (request,response)=>{
    try {
        const producto = await Productos.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.mostrarProductos = async (req, res)=>{
    try {
        const resultado = await User.find({_id:req.usuarios._id},'productos').populate('productos')
        console.log(req.usuarios)
        res.json(resultado)
    } catch (error) {
        res.json(error);
        console.log(error)
    }
}

// module.exports.mostrarUnaMascota = async (request, response) => {
//     try {
//         const producto = await Mascota.findOne({_id:request.params.id})
//         response.json(producto );
//     } catch (error) {
//         response.status(400);
//         response.json(error);
//     }
// }

// module.exports.EliminarMascota = async (request,response)=>{
//     try {
//         const mascota = await Mascota.deleteOne({_id: request.params.id})
//         response.json(mascota);
//     } catch (error) {
//         response.status(400);
//         response.json(error);
//     }
// }