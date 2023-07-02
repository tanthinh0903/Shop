const Product = require('../models/Products')

class ProductsController {
    
    // [GET] /products
    index(req, res, next) {
        
        Product.find({})
            .then(products => {
                products = products.map(product => product.toObject());
                res.render('add-to-cart', { products });
            })

            .catch(next);

    }
}

module.exports = new ProductsController;