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
    },

    show: (req, res) => {
        const id = req.params.id;
        ProductModel.findOne({_id: id}, (err, product) => {
            if(err){
               return res.status(500).json({
                   status: 500,
                  message: 'Error when getting Product.'
                })
            }
            if (!product) {
                return res.status(404).json({
                    status: 404,
                    message: 'No such Product '
                })
            }
            return res.status(200).json({
                status: 200,
                product: product
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