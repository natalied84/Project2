// Require models and passport
var db = require("../../models");
var passport = require("../../config/passport");

module.exports = function(app) {
    //Login - if login valid send to member else send error
    // app.post("/api/login", passport.authenticate("local"), function(req, res) {
    //     res.json("/members");
    // });

    // //Sign up route - email and password - account created
    // app.post("/api/singup", function(req, res) {
    //     console.log(req.body);
    //     db.User.create({
    //         email: req.body.email,
    //         password: req.body.password
    //     }).then(function() {
    //         res.redirect(307, "api/login");
    //     }).catch(function(err) {
    //         console.log(err);
    //         res.json(err);
    //     });
    // });

    // //Log out use route
    // app.get("/logout", function(req, res) {
    //     req.logout();
    //     res.redirect("/");
    // });

    // //User data route to send data to frontend 
    // app.get("/api/user_data", function(req, res) {
    //     if (!req.user) {
    //         res.json({});
    //     } else {
    //         res.json({
    //             email: req.user.email,
    //             id: req.user.id
    //         });
    //     }
    // });
};