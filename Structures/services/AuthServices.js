const { default: fetch } = require("node-fetch");
const BaseService = require("../BaseService");

module.exports = class AuthService extends BaseService {
  constructor(api) {
    super(api);
  }

  /**
   * @param {string} code
   * @returns {Promise<import('discord-api-types/v9').RESTPostOAuth2AccessTokenResult>}
   */
  async digestCode(code) {
    const result = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: new URLSearchParams({
        client_id: this.api.client.config.id,
        client_secret: this.api.client.config.Secret,
        code,
        grant_type: "authorization_code",
        redirect_uri: this.api.client.config.redirect,
        scope: "identify",
      }),
    });

    return await result.json();
  }
};
