const express = require('express');
const homePingController  = require('../../controllers/home.controller');

const router = express.Router(); // express router object
router.get('/ping',homePingController); // /ping

module.exports=router;