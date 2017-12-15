const mongoose = require('mongoose');
const schema = mongoose.Schema;

const intervieweeSchema = new schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
            maxlength: 10,
        },
        age: {
            type: Number,
            required: true,
            min: 18,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('interviewee', intervieweeSchema);