
// Initialize express router

let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: '200',
        message: 'Welcome to NodeJS, Express & Mongoose Application!',
    });
});
// Import contact controller
var userController = require('./userController');
// Contact routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);

router.route('/users/:id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

// Export API routes
module.exports = router;