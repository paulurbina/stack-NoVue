const User = require('../models/User')
const config = require('../config/config')
const jwt = require('jsonwebtoken')

function jwtSignUpUser (user) {
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try {
            const user = await new User(req.body)
            res.send({
                    message: 'Your register',
                    user
                })
        } catch (error) {
           res.state(400).send({
               error: 'failed your register'
           })
        }
    },
    async login (req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if(!user) {
                res.status(403).send({
                    error: 'The login information is incorrect'
                })
            }

            const isPasswordValid = password === user.password
            if(!isPasswordValid) {
                res.status(403).send({
                    error: 'The login information is incorrect'
                })
            }
            // all correct
            res.send({
                message: 'welcome',
                user,
                token: jwtSignUpUser(user)
            });
        } catch (error) {
           res.state(500).send({
               error: 'failed your login',
               error: 'Credentials is incorrects'
           })
        }
    },
}