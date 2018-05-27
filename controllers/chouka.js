const APIError = require('../middlewares/response').APIError;
const Lsn_user = require('./../models/lsn_user');
const Lsn_card = require('./../models/lsn_card');
const Log = require('./../models/log');

module.exports = {
    
    async user(ctx, next) {
        const { nickname } = ctx.request.query;
        const user = await Lsn_user.findOne({ nickname });
        const log = new Log({ 
            type: 'collection', 
            nickname, 
            ip: ctx.ip, 
            agent: ctx.header['user-agent']
        });
        log.save(function (err) {
          if (err) console.log(err);
        });
        ctx.ok(user);
    },

    async cards(ctx, next) {
        const cards = await Lsn_card.find();
        ctx.ok(cards);
    },

    async users(ctx, next) {
        const users = await Lsn_user.find();
        const log = new Log({ 
            type: 'ranking', 
            nickname: "", 
            ip: ctx.ip, 
            agent: ctx.header['user-agent']
        });
        log.save(function (err) {
          if (err) console.log(err);
        });
        ctx.ok(users);
    }
}