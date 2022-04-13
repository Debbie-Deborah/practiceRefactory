const mongoose = require('mongoose')

//creating the schema
const registerSchema = mongoose.Schema({
 username:{
     type:String,
     required:true
// the data that is coming in, its a string and required
 },
 email:{
     type:String,
     required:true,
     unique: true
//the data that is coming in, its a string and is required
 },
password:{
    type:String,
    required:true,
//the data that is coming in, its a number and is required
}
})

// we are exposing our schema to other files
module.exports = mongoose.model('Register', registerSchema);