const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var UserSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    lastname:{
        type:String,
    },
    firstname:{
        type:String,
    },
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    mobile:{
        type:String,
    },
    password:{
        type:String,
        
    },
    avatar:{
        type: String,
    },
    createdAt:{
        type: Date, default : Date.now()
    }
});

//Export the model
module.exports = mongoose.model('User', UserSchema);