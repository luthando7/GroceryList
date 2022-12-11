'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../api/shops.controller')

router.get('/', controller);

module.exports = router;
