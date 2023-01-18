const mongoose = require('mongoose');

mongoose.connect(process.env.DB);

const connecttoDB = async ()=>{
    mongoose.connection.on('connected', connection=>{
        console.log('database is connected')
    });
    mongoose.connection.on('error', err=>{
        console.log('connection error')
    });
}
module.exports = connecttoDB;