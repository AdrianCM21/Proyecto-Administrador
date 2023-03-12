const jwt = require("jsonwebtoken");
const secret = process.env.MI_CLAVESECRETA;
module.exports.autentificacion = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
    if (err) { 
      res.status(401).json({verified: false});
    } else {
        req.usuarios=payload;
        next();
    }
  });
}