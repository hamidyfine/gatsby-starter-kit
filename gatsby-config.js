module.exports = {
    siteMetadata: {
        title  : 'gatsby-blog-tutorial',
        siteUrl: 'https://www.yourdomain.tld',
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-intl',
            options: {
                path           : `${__dirname}/src/locales`,
                languages      : ['en'],
                defaultLanguage: 'en',
                redirect       : false,
            },
        },
    ],
};
