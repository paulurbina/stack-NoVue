const AuthenticationController = require('./controllers/AuthenticationController')
AuthenticateControllerPolice = require('./policies/AuthenticateControllerPolice')

module.exports = (app) => {
    app.post('/register',
    AuthenticateControllerPolice.register,
    AuthenticationController.register),

    app.post('/login',
    AuthenticationController.login)
}