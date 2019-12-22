module.exports = {
	siteMetadata: {
		title: `Penzion STEININGER`,
		description: `Penzionu Steininger - levné ubytování v útulném penzionu.`,
		keywords: `ubytování, bydlení, přenocování, přespání, volné, volný, pokoj, pokoje, apartmán, apartmány, Oloví, karlovarsko, Česká Republika, penzion, steininger, Kraslice, Sokolov, soukromí, hotel, accommodation, housing, overnight, free, room, rooms, apartment, apartments, Czech Republic, pension, privacy, clean, open, habitation, residence, night, overnight, overnights, stay, stays, available, availability, bedroom, guestroom, suites, house, Karlovy Vary, inn, homes, private, Unterkunft, Unterkuenfte, Übernachtung, Uebernachtung, frei, freie, freien, Zimmer, Wohnung, Wohnungen, Blei, Tschechische Republik, Grazlitz, Falkenau, Datenschutz, Bleistadt, gehause, gehaeuse, Schlafen, raum, ferienwohnung, ruhe, privatleben, wifi, internet, nature, příroda, natur, vald, wälder, waelder`,
		author: `Michael Baroň`,
		languages: [
			{ url: '/', iso: 'CZ' },
			{ url: '/en', iso: 'EN' },
			{ url: '/de', iso: 'DE' },
		]
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Penzion STEININGER`,
				short_name: `Penzion STEININGER`,
				start_url: `/`,
				background_color: `#111111`,
				theme_color: `#FF0000`,
				display: `minimal-ui`,
				icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
