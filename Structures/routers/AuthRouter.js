const BaseRouter = require("../BaseRouter");
const AuthService = require("../services/AuthServices");

module.exports = class AuthRouter extends BaseRouter {
  constructor(api) {
    super(api);

    this.authService = new AuthService(this.api);
  }

  /**
   * @param {import("express").Request} _req
   * @param {import("express").Response} res
   */
  loginRoute(_req, res) {
    res.redirect(
      `https://discord.com/api/oauth2/authorize?client_id=879449679916568626&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fcallback&response_type=code&scope=identify%20guilds%20connections`
    );
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async callbackRoute(req, res) {
    const { code } = req.query;
    if (!code) return res.status(400).send({ message: "No code specified" });

    const { access_token, refresh_token } = await this.authService.digestCode(
      code
    );

    res.cookie("token", { access_token, refresh_token });
    res.redirect("/");
    
  }

  /**
   * @param {import("express").Request} _req
   * @param {import("express").Response} res
   */
  async logoutRoute(_req, res) {
    res.clearCookie('token');
    res.redirect('/');
  }

  start() {
    this.router.get("/auth/login", this.loginRoute.bind(this));
    this.router.get("/auth/callback", this.callbackRoute.bind(this));
    this.router.get("/auth/logout", this.logoutRoute);
  }
};
