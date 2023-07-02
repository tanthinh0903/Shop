const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const Product = require('../models/Products')
const Staff = require('../models/Staff')
const Depart = require('../models/Depart')
const Bill = require('../models/Bill')
const async = require('async');

class AdminController {
    
    // [GET] /admin 
    index(req, res, next) {
        Bill.find({})
            .then(bill => {
                res.render('dashboard', {
                    layout: 'admin',
                    bill: multipleMongooseToObject(bill)
                })
            })
        
    }

    // [DELETE] /admin/:id
    destroyBill(req, res, next) {
        Bill.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [GET] /admin/add-products
    products(req, res, next) {
        res.render('add-products', {layout: 'admin'})
    }

    // [GET] /admin/add-staff
    addStaff(req, res, next) {
        Depart.find({})
            .then(depart => {
                res.render('add-staff', {
                    layout: 'admin',
                    departs: multipleMongooseToObject(depart)
                })
            })
    }

    // [GET] /admin/manage-products
    manageProduct(req ,res, next) {
        Product.find({})
            .then(products => {
                res.render('manage-products', {
                    layout: 'admin',
                    products: multipleMongooseToObject(products)
                })
            })
        
    }
    
    // [GET] /admin/add-products
    addDepart(req, res, next) {
        res.render('add-depart', {layout: 'admin'})
    }

    // [GET] /admin/manage-depart
    manageDepart(req, res, next) {
        Depart.find({})
            .then(depart => {
                res.render('manage-depart', {
                    layout: 'admin',
                    departs: multipleMongooseToObject(depart)
                })
            })
    }

    // [POST] /admin/store-staff
    storeStaff(req, res ,next) {
        const formData = req.body;
        const staff = new Staff(formData);
        staff.save()
            .then(() => res.redirect('/admin/manage-staff'))
            .catch(error => {
                console.log(`Insert staff data failed`);
            })
    }

    // [POST] /admin/store-depart
    storeDepart(req, res, next) {
        const formData = req.body;
        const depart = new Depart(formData);
        depart.save()
            .then(() => res.redirect('/admin/manage-depart'))
            .catch(error => {
                console.log(`Insert depart data failed`)
            })
    }

    // [POST] /admin/store-products
    storeProduct(req, res, next) {
        const formData = req.body;

        const product = new Product(formData);
        product.save()
            .then(() => res.redirect('/admin/manage-products'))
            .catch(error => {
                console.log(`Insert products data failed`)
            })
    }

    // [GET] /admin/manage-staff/:id/edit
    editStaff(req, res, next) {
        var locals = {};
        async.parallel([

            //Load staff data 
            function(callback) {
                 Staff.findById(req.params.id,function(err,staff){
                    if (err) return callback(err);
                    staff ? locals.staff = staff.toObject() : staff;
                    callback();
                });
            },
            //Load depart data using 
            function(callback) {
                   Depart.find({},function(err,depart){
                   if (err) return callback(err);
                    locals.depart = depart.map(mongoose => mongoose.toObject());
                    callback();
                });
            }
        ], function(err) { //This function gets called after the two tasks have called their "task callbacks"
            if (err) return next(err); //If an error occurred, we let express handle it by calling the `next` function
            
            //Here `locals` will be an object with `user` and `posts` keys
            //Example: `locals = {user: ..., posts: [...]}`
    
    
            res.render('edit-staff', {
                layout: 'admin',
                staff: locals.staff,
                depart: locals.depart
            })
        });
    

        
        
    }
    
    // [GET] /admin/manage-depart/:id/edit
    editDepart(req, res, next) {
        Depart.findById(req.params.id)
            .then(depart => res.render('edit-depart', {
                layout: 'admin',
                depart: mongooseToObject(depart)
            }))
            .catch(next);
       
    }

    // [GET] /admin/manage-products/:id/edit
    editProduct(req, res, next) {
        Product.findById(req.params.id)
            .then(products => res.render('edit-products', {
                layout: 'admin',
                products: mongooseToObject(products)
            }))
            .catch(next);
        
    }

    // [PUT] /admin/manage-products/:id
    updateProduct(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/manage-products'))
            .catch(next)
    }

    // [PUT] /admin/manage-staff/:id
    updateStaff(req, res, next) {
        Staff.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/manage-staff'))
            .catch(next)
    }   

    // [PUT] /admin/manage-depart/:id
    updateDepart(req, res, next) {
        Depart.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/manage-depart'))
            .catch(next)
    }

    // [DELETE] /admin/manage-depart/:id
    destroyStaff(req, res, next) {
        Staff.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /admin/manage-depart/:id
    destroyDepart(req, res, next) {
        Depart.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /admin/manage-depart/:id
    destroyProduct(req, res, next) {
        Product.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }


}

module.exports = new AdminController;