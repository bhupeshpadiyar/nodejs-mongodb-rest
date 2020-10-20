
// Import contact model
User = require('./userModel');
// Handle index actions
exports.index = async function (req, res){

    try {
        const response = await User.find({});
        res.status(200).json({
            status: 200,
            message: "Users retrieved successfully!!",
            data: response == null ? [] : response
        });
    } catch(err) {
        res.status(500).json({
            status: 500,
            message: err
        });
    }
};

// Handle create user actions
exports.new = async function (req, res) {

    // Create User model Object
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.age = req.body.age;
    user.address = req.body.address;

    try {
         // save the user and check for errors
        const response = await user.save();
        res.status(200).json({
            status: 200,
            message: "New User created successfully!!",
            data: response
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err
        });
    }
};

// Handle view contact info
exports.view = async function (req, res) {

    try {
        // save the user and check for errors
       const response = await User.findById(req.params.id);
       res.status(200).json({
           status: 200,
           message: "User details fetched successfully!!",
           data: response == null ? {} : response
       });
   } catch (err) {
       res.status(500).json({
           status: 500,
           message: err
       });
   }
};

// Handle update user info
exports.update = async function (req, res) {

    try {
        // save the user and check for errors
        const user = await User.findById(req.params.id);

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.age = req.body.age;
        user.address = req.body.address;
        const saeUserResp = await user.save(req.params.id);
        res.status(200).json({
            status: 200,
            message: "User Info updated successfully!!",
            data: saeUserResp
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err
        });
    }
};

// Handle delete user
exports.delete = async function (req, res) {

    try {
        // save the user and check for errors
        const deleteResponse = await User.remove({_id: req.params.id});
 
        res.status(200).json({
            status: 200,
            message: "User Info updated successfully!!",
            data: deleteResponse
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err
        });
    }
};