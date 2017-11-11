const express = require('express');
const router = express.Router();

/**
 * JSON object is printed as output 
 */
function createUser(req, res){
    const resObj = [
        {
            username: 'sanyog96',
            password: 'sdfsdasd',
        },
    ];
    res.status(200).json(resObj);
} 
router.get('/', createUser);

module.exports = router;