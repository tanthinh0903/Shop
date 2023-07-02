const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteControllers')

// siteController.storeBill
router.post('/shopping-cart/store-bill', siteController.storeBill)

// siteController.remove
router.get('/remove/:id', siteController.remove)

// siteController.reduce
router.get('/reduce/:id', siteController.reduce)

// siteController.detail
router.get('/detail/:ID', siteController.detail)

// siteController.staff
router.get('/admin/manage-staff', siteController.staff)

// siteController.shopping
router.get('/shopping-cart', siteController.shopping)

// siteController.cart
router.get('/add-to-cart/:id', siteController.cart)

// siteController.index
router.get('/', siteController.index)

module.exports = router;