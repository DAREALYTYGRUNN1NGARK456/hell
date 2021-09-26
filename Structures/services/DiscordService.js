const { default: fetch } = require('node-fetch');
const BaseService = require('../BaseService');

module.exports = class DiscordService extends BaseService {
	constructor(api) {
		super(api);
	}

	/**
	 *
	 * @param {string} token
	 * @returns {Promise<import("discord-api-types").RESTGetAPIUserResult | null>}
	 */
	async resolveUser(token) {
		if (!token) return null;
		
		const res = await fetch('https://discord.com/api/v8/users/@me', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return await res.json();
	}

	/**
	 *
	 * @param {string} token
	 * @returns {Promise<import("discord-api-types").RESTGetAPICurrentUserGuildsResult | null>}
	 */
	async resolveGuilds(token) {
		const res = await fetch('https://discord.com/api/v8/users/@me/guilds', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return await res.json();
	}
};
