const productsRouter = require('./products')
const siteRouter = require('./site')
const adminRouter = require('./admin')

function route(app) {

    app.use('/', siteRouter)
    
    app.use('/products', productsRouter)

    app.use('/admin', adminRouter)

    

}
module.exports = route;