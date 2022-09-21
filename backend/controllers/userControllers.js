//regex to check is email or not
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.com)+$/
const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!regex.test(email)) {
            return res.json({ error: "Not valid email", part: 'email' });
        }

        const user = await Users.findOne({ where: { email: email } });
        if (!user) {
            return res.json({ error: "This user do not register yet", part: 'email' })
        }

        bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                return res.json({ error: "Wrong Username and Password Combination", part: 'email and password' });
            }

            const accessToken = jwt.sign({ id: user.id }, process.env.SECRET_STRING);
            return res.json({ userName: user.userName, token: accessToken});
        })
    } catch (error) {
        console.log(error)
    }
}

const userRegister = async (req, res) => {
    try {
        const { email, userName, password } = req.body;
        if (!regex.test(email)) {
            return res.json({ error: "Not valid email", part: 'email' });
        }

        const userByEmail = await Users.findOne({ where: { email: email } });
        if (userByEmail) {
            return res.json({ error: "This email had register", part: 'email' })
        }
        const userByUserName = await Users.findOne({ where: { userName: userName } });
        if(userByUserName){
            return res.json({ error: "This userName already had", part: 'userName' })
        }

        bcrypt.hash(password, 10).then(async (hash) => {
            const newUser = await Users.create({
                userName: userName,
                email: email,
                password: hash
            })

            const accessToken = jwt.sign({ id: newUser.id }, process.env.SECRET_STRING);
            res.json({ userName: newUser.userName, token: accessToken })
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    userLogin,
    userRegister
}