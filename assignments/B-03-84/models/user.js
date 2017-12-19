const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    linkedin: {
        id: String,
        token: String,
        email: String,
        name: String,
        dob: Date,
        summary: String,
        industry: Number,
        position: {
            id: String,
            title: String,
            summary: String,
            start_Date: String,
            end_Date: String,
            is_current: String,
            company: {
                id: String,
                name: String,
            },
        },
        picture_url: String,
        public_profile_linkedin_url: String,
        associations: String,
        interests: String,
        publications: {
            id: String,
            title: String,
            Date: Date,
            url: String,
        },
        patents: {
            id: String,
            title: String,
            summary: String,
            Number: Number,
            status: {
                id: String,
                name: String,
            },
            Date: Date,
            url: String,
        },
        language: {
            id: String,
            name: String,
            proficiency: String,
        },
        skills: {
            id: String,
            name: String,
        },
        certifications: {
            id: String,
            name: String,
            authority: String,
            Number: String,
            start_Date: Date,
            end_Date: Date,
        },
        educations: {
            id: String,
            school_name: String,
            field_of_study: String,
            start_Date: Date,
            end_Date: Date,
            degree: Number,
        },
        courses: {
            id: String,
            name: String,
            Number: Number,
        },
    }},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);