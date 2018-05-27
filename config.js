require('dotenv').config(); // this loads the defined variables from .env

const config = {
    sessionKey: process.env.SESSION_KEY || 'secret',
    mongodb: {
        uri: process.env.MONGO_DB_URI || 'mongodb://xinsong:68t8OPPBdHkio3n0@cluster0-shard-00-00-8baxf.mongodb.net:27017,cluster0-shard-00-01-8baxf.mongodb.net:27017,cluster0-shard-00-02-8baxf.mongodb.net:27017/modian_chouka?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
    },
};

module.exports = config;


