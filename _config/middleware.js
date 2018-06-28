const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const config = require('../config');
const corsOptions = {
  origin: '*',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

module.exports = function (server) {
  server.use(helmet());
  server.use(express.json());
  // Begin code for cross-site allowances -------------------------------------
  server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Cross Site Allowance
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
  server.use(cors(corsOptions));
};