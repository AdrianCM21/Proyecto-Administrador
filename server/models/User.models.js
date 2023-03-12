const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    nombre: { 
        type: String,
        required:true
    },  
    email:{
        type: String,
        required:true,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
          }          
    },
    password: { 
        type: String,
        required:true
    },
    productos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'productos'
    }]
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );


UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });
UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });

UserSchema.set('toJSON',{
    transform:(document,returnObject)=>{
        returnObject.id=returnObject._id
        delete returnObject.password
        delete returnObject._id
        delete returnObject.__v
    }
})

module.exports.User = mongoose.model('users',UserSchema)