const express = require('express');
const bfhlRouter = express.Router();
const bfhlController = require('../controller/bajajController.js');

bfhlRouter.post('/', bfhlController.processData);
bfhlRouter.get('/', bfhlController.getOperationCode);

module.exports = bfhlRouter;