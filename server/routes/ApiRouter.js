const express = require("express");
const { get } = require("http");
const ApiRouter = express.Router();
const {PersonController} = require('./../controllers/ApiController');


ApiRouter
    .get( '/', PersonController.allPeople );
ApiRouter
    .get('/new/:name', PersonController.addname);
module.exports = {ApiRouter}