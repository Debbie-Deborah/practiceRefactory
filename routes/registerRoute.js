const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
router.use(expressValidator());
const bcrypt = require('bcryptjs');

//requiring the model
const Register = require('../models/registerModel');

//route for viewing the page on the web client
router.get('/register', (req, res) => {
    res.render('register')
});

//route for the post method
router.post('/register', (req, res) => {
    //declare variables that correspond to the names of the different input fields in the form
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    
    //Handling errors
    const errors = req.validationErrors()
    if (errors){
        //in case of an error, remain on register page
        res.render('register')
    }
    else {
        let newRegister = new Register({
//value(as used in the schema): property(as used in the form as the name of the input type)
            username: username,
            email: email,
            password: password 
        });
        
        //encrypting the password using bcrypt
        bcrypt.genSalt(7, (err, salt) => {
            bcrypt.hash(newRegister.password, salt, (err, hash) => {
                if (err) {
                    console.error(err)
                    return;
                }
                newRegister.password = hash;

        //saving the model
                newRegister.save( (err)=> {
                    if (err) {
                        console.error(err)
                        return; 
                    }
                    else {
                        //since this is a register page, it should redirect you to the login page
                        req.flash('success', 'You have successfully signed up')
                        console.log('You have saved your data to the database')
                        res.redirect('/login')
                    }
                })


                
            })

         })


        
    }


});

//exposing the route to any file that will need to access it
module.exports = router;