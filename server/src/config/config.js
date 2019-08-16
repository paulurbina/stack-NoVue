module.exports = {
    PORT: process.env.PORT || 8081,
    URL: process.env.URL || 'mongodb://localhost:27017/appnode',
    authentication:  {
        jwtSecret: process.env.JWT_SECRET | 'secret'
    }
}