const mongoose = require('mongoose');

mongoose.connect(`${ process.env.MONGO_URL}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( rep => console.log('Conectado a la base de datos'))
.catch(err=> console.log('Errorrrr',err))