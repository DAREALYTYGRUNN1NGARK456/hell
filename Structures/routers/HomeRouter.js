const BaseRouter = require('../BaseRouter');
const DiscordService = require('../services/DiscordService');

module.exports = class HomeRouter extends BaseRouter {
	constructor(api) {
		super(api);

		this.discordService = new DiscordService(this.api);
	}

	/**
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 */
	async homeRouter(req, res) {
		res.render('index', {
			serverCount: this.api.client.guilds.cache.size,
			userCount: this.api.client.guilds.cache.reduce((accumulator, guild) => accumulator + guild.memberCount, 0),
			user: req.cookies?.token ? await this.discordService.resolveUser(req.cookies.token.access_token) : null,
			bot: this.api.client,
		});
	}

	/**
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 */
	async dashboardRouter(req, res) {
		if (!req.cookies.token) return res.redirect('/auth/login');

		res.render('dashboard', {
			user: await this.discordService.resolveUser(req.cookies.token.access_token),
			guilds: await this.discordService.resolveGuilds(req.cookies.token.access_token),
			bot: this.api.client,
		});
	}

	/**
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 */
	async termsRouter(req, res) {
		res.render('terms', {
			user: await this.discordService.resolveUser(req.cookies.token?.access_token),
		});
	}

	/**
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 */
	async privacyRouter(req, res) {
		res.render('privacy', {
			user: await this.discordService.resolveUser(req.cookies.token?.access_token),
		});
	}

	/**
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 */
	async manageRouter(req, res) {
		if (!req.cookies.token) return res.redirect('/auth/login');

		res.render('manage', {
			user: await this.discordService.resolveUser(req.cookies.token.access_token),
			guilds: await this.discordService.resolveGuilds(req.cookies.token.access_token),
			bot: this.api.client,
		});
	}

	/**
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 */
	async manageRouter(req, res) {
		if (!req.cookies.token) return res.redirect('/auth/login');

		res.render(`manage`, {
			user: await this.discordService.resolveUser(req.cookies.token.access_token),
			guilds: await this.discordService.resolveGuilds(req.cookies.token.access_token),
			bot: this.api.client,
		});
	}

	start() {
		this.router.get('/', this.homeRouter.bind(this));
		this.router.get('/dashboard', this.dashboardRouter.bind(this));
		this.router.get('/manage', this.manageRouter.bind(this));
		this.router.get('/terms', this.termsRouter.bind(this));
		this.router.get('/privacy', this.privacyRouter.bind(this));
		this.router.get('/guild/:id/manage', this.manageRouter.bind(this));
	}
};
