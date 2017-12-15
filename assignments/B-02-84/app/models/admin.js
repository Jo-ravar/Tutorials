const mongoose = require('mongoose');
const schema = mongoose.Schema;

const adminSchema = new schema(
    {
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('admin', adminSchema);