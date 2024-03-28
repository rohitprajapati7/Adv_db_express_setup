const express = require('express');
const homePingController  = require('../../controllers/home.controller');
const todoRouter = require('../v1/todo.routes')

const router = express.Router(); // express router object
router.use('/todos',todoRouter )
router.get('/ping',homePingController); // /ping


module.exports=router;