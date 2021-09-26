const { resolve } = require("path");
const cors = require("cors");
const { static: expressStatic } = require("express");
const { readdirSync } = require("fs");
const gradient = require("gradient-string");
const cookieParser = require("cookie-parser");

module.exports = class API {
  /**
   * @param {import('discord.js').Client} client
   */

  

  constructor(client) {
    this.client = client;
    this.server = require("express")();

    this.server
      .set("views", resolve(process.cwd(), "Views"))
      .use(expressStatic(resolve(process.cwd(), "Views", "public")))
      .set("view engine", "ejs")
      .use(cors({ origin: true, credentials: true }))
      .use(cookieParser());
  }

  /**
   * @param {number} port
   */
  start(port) {
    const path = resolve(__dirname, "routers");
    const routers = [];

    for (const router of readdirSync(path).map(
      (module) => new (require(`${path}/${module}`))(this)
    )) {
      router.start();

      this.server.use(router.router);
      routers.push(router.constructor.name);
    }

    this.server.listen(port, () => {
      const ascii = `
    _,-._
   / \\_/ \\   --- API online at port ::${port}.
   >-(_)-<   ——— Attached ${routers.join(", ")}.
   \\_/ \\_/
     \`-'`;

      console.log(gradient.passion(ascii));
    });
  }
};
