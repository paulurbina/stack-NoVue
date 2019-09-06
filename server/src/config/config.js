module.exports = {
    PORT: process.env.PORT || 8081,
    URL: process.env.URL || 'mongodb://localhost:27017/nodevue',
    URLMLAB: 'mongodb://paulnodevue1:paulnodevue1@ds235778.mlab.com:35778/nodevue',
    authentication:  {
        jwtSecret: process.env.JWT_SECRET | 'secret'
    }
}
