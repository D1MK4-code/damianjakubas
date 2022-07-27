require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `Damian Jakubas`,
    siteUrl: `https://damian-jakubas.netlify.com`,
    description: `Blog poświęcony tematyce Web Developmentu oraz prywatne portfolio`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
  ],
};
