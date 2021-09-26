const { Router } = require("express");
const API = require("./API");

module.exports = class BaseRouter {
  /**
   * @param {API} api
   */
  constructor(api) {
    this.api = api;
    this.router = Router();
  }

  start() {
    throw new Error("'Start' method not implemented.");
  }
};
