const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/AdminControllers')

// adminController.destroyBill
router.delete('/:id', adminController.destroyBill)

// adminController.destroyStaff
router.delete('/manage-staff/:id', adminController.destroyStaff)

// adminController.destroyDepart
router.delete('/manage-depart/:id', adminController.destroyDepart)

// adminController.Product
router.delete('/manage-products/:id', adminController.destroyProduct)

// adminController.updateStaff
router.put('/manage-staff/:id', adminController.updateStaff)

// adminController.updateDepart
router.put('/manage-depart/:id', adminController.updateDepart)

// adminController.updateProduct
router.put('/manage-products/:id', adminController.updateProduct)

// adminController.editProduct
router.get('/manage-products/:id/edit', adminController.editProduct)

// adminController.editDepart
router.get('/manage-depart/:id/edit', adminController.editDepart)

// adminController.editStaff
router.get('/manage-staff/:id/edit', adminController.editStaff)

// adminController.store
router.post('/store-depart', adminController.storeDepart)

// adminController.store
router.post('/store-products', adminController.storeProduct)

// adminController.store
router.post('/store-staff', adminController.storeStaff)

// adminController.manageDepart
router.get('/manage-depart', adminController.manageDepart)

// adminController.addDepart
router.get('/add-depart', adminController.addDepart)

// adminController.manageProduct
router.get('/manage-products', adminController.manageProduct)

// adminController.addStaff
router.get('/add-staff', adminController.addStaff)

// adminController.products
router.get('/add-products', adminController.products)

// adminController.index
router.get('/', adminController.index)

module.exports = router;