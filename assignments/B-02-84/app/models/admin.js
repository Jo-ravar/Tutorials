const mongoose = require('mongoose');
const schema = mongoose.Schema;

const validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const adminSchema = new schema(
    {
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        user_name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
