const jwt = require('jsonwebtoken');
const {Users} = require('../models');

const requireAuth = async (req, res, next) => {
    //verify authentication
    const { authorization } = req.headers;

    if(!authorization){
        return res.json({ error: 'You need to access to use our function' });
    }

    // console.log(authorization);
    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY4YWU2ODJhYjE0MjMzYjE3NmI5YTQiLCJpYXQiOjE2NjA0Njk5ODQsImV4cCI6MTY2MDcyOTE4NH0.6brqL2NE486rXCr7Dpx4oyU2L9s2R1OCokNY-Nha-vc
    const token = authorization.split(' ')[1];

    try {
        const {id} = jwt.verify(token, process.env.SECRET_STRING);

        req.user = await Users.findByPk(id);
        return next();
    } catch (error) {
        console.log(error);
        res.json({error: 'Require is not authoriza'})
    }
}

module.exports = requireAuth;