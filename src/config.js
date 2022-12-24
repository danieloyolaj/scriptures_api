//Dependencies
require('dotenv').config()

const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development', //Development, Testing, Production
    jwtSecret: process.env.JWT_SECRET,
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'mysql',
        password: process.env.DB_PASSWORD || '12345',
        dbName: process.env.DB_NAME || 'scriptures'
    }
}

module.exports = config