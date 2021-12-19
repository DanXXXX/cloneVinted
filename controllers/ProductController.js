//const ProductModel = require('../models/ProductModel.js');
var ProductModel = require('../models/ProductModel');
 
/**
*   ProductController.js
*
*   @description :: Server-side logic for managing products.
*
*/
module.exports = {

    list: (req, res )=> {
        ProductModel.find((err, products)=> {
           if(err){
               return res.status(500).json({
                   status: 500,
                  message: 'Error when getting Products.'
               })
           }
           return res.status(200).json({
                  status: 200,
                products: products 
           }) 
       }) 
    }
}

// exports.list = (req, res) => {
//     ProductModel.find()
//     .then((product) => {
//       res.render('index', {title: "Produit", "product": product}); 

//     }).catch((error) => {
//        res.status(400).json(error);
//        console.error('error');
//     });
// }