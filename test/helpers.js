var supertest = require("supertest");
// var chai = ("chai");
var app = require("../index.js");
var expect = require('chai').expect

global.app = app;
global.request = supertest(app);
global.expect = expect;