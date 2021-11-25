const express = require("express");
const PersonRouter = express.Router();
const {PersonController} = require('./../controllers/ApiController');

PersonRouter
    .get( '/api', PersonController.allPeople );

module.exports = {PersonRouter}