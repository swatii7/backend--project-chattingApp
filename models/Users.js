const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type : 'string',
            require: true,
        },
        username: {
            type : 'string',
            require: true,
        },
        
        password: {
            type : 'string',
            require: true,
        },
        
        date: {
            type : 'string',
            default: Date.now,
        },
        

    }
);

const Users = mongoose.model('users', UserSchema);
module.exports.Users;