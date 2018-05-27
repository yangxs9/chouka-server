const router = require('koa-router')();
const choukaController = require('../controllers/chouka');

router.get('/api/user', choukaController.user)
    .get('/api/cards', choukaController.cards)
    .get('/api/users', choukaController.users);

module.exports = router;