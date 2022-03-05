/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
	siteMetadata: {
		title: `Nziranziza Daniel - Portfolio`,
		siteUrl: `https://nziranziza.github.io/nziranziza/`,
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
        ],
        display: 'swap'
      }
    }
	],
	pathPrefix: "/nziranziza",
};
