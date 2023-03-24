const ControlProducto = require('../controllers/Producto.controller');
const ControlUser = require('../controllers/User.controller');
const Autentificacion = require('../config/Jwt.config')

module.exports = (app)=>{
    app.post("/api/login",ControlUser.login);
    app.get("/api/user",ControlUser.cerrar);
    app.post("/api/user",ControlUser.createUser);
    app.get("/api/producto",Autentificacion.autentificacion,ControlProducto.mostrarProductos);
    app.post("/api/producto",Autentificacion.autentificacion,ControlProducto.createProducto);
    app.put('/api/producto/:id',Autentificacion.autentificacion,ControlProducto.actualizarProductos)
    app.put('/api/reponer/:id',Autentificacion.autentificacion,ControlProducto.reponerProductos)
}

