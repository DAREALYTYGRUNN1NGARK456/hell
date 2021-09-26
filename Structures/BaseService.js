const { Router } = require("express");
const API = require("./API");

module.exports = class BaseService {
  /**
   * @param {API} api
   */
  constructor(api) {
    this.api = api;
  }
};
