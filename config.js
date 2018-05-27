require('dotenv').config(); // this loads the defined variables from .env

const config = {
    sessionKey: process.env.SESSION_KEY || 'secret',
    mongodb: {
        uri: process.env.MONGO_DB_URI
    },
};

module.exports = config;


