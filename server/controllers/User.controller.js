const {User} = require('../models/User.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.createUser = async (request, response) => {
    try{
    const user = new User(request.body);
    await user.save();
    response.json(user);
    console.log(user);
    } catch(err){
        response.status(400);
        response.json(err);
        
     } ;
}

module.exports.login= async (req, res) => {
    try {
        const {email:Email,password} = req.body;
        console.log(Email,'   ',password)
        const user = await User.findOne({ email: Email })
        // console.log(user)
        if (user === null) {
            return res.status(403).json({ msg: "Correo o Contraseña invalidos" });
        }
        const esValido = await bcrypt.compare(password, user.password);
        if(esValido){
            const secret = process.env.MI_CLAVESECRETA;
            const newJWT = jwt.sign({
                _id: user._id,
                nombre:user.nombre
                
            },secret)
            
            res.cookie("usertoken", newJWT, {
              httpOnly: true
            }).json({msg:'Inicio de secion exitosa'})
        }else{
            res.json({ msg: "Correo o Contraseña invalidos",validacion:true });
        }
    } catch (error) {
        console.log(error)
        res.status(400)
        res.json(error)
    }
  };
  
  module.exports.cerrar=(req,res)=>{
    try {
        res.clearCookie("usertoken");
        res.json({msg:'Saliste Correctamente'})
    } catch (error) {
        res.json(error)
    }
  }
  