
const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;
// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
            "name" : String,
     "description" : String,
           "price" : Number,
           "stock" : Number,
           "image" : String,
          "userId" : {
              type: Schema.Types.ObjectId,
              ref  : "User" 
          },
       "createsAt" : {type: Date , default: Date.now()}
   
});

//Export the model
const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;