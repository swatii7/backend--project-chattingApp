const express = require('express');
const router = express.Router();
const validateRegisterIntput = require('../validation/register')

// localhost: 5000/api/user/register
router.post('/register', (req, res) =>{
//Form validation
const {errors, isValid} = validateRegisterIntput(req.body);
//Check validation
if(!isValid){
    return res.status(400).json(errors);
    }

    const newUser = new Users({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
    })

    newUser.save().then(user => {
        res.json(user)
    })

})

module.exports= router;