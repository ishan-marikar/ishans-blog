const mdxFeed = require('gatsby-mdx/feed')

const configuration = {
  // the name of your website
  title: 'Ishan Marikar',
  // the description of the website (eg. what shows on Google)
  description: "Ishan Marikar's blog",
  // a short bio shown at the bottom of your blog posts
  // It should complete the sentence: Written by Ishan Marikar ...
  shortBio: '',
  // a longer bio showing on the landing page of the blog
  bio: `Coder. FOSS enthusiast. Maker of stuff. MAD SCIENTIST. Sri Lankan.`,
  author: 'Ishan Marikar',
  githubUrl: 'https://github.com/ishan-marikar/ishans-blog',
  // replace this by the url where your website will be published
  siteUrl: 'http://localhost:8000',
  social: {
    // leave the social media you do not want to appear as empty strings
    twitter: 'ishanmarikar',
    medium: '@ishanmarikar',
    facebook: '',
    github: '',
    linkedin: '',
    instagram: '',
  },
}

module.exports = {
  siteMetadata: configuration,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              backgroundColor: 'transparent',
              showCaptions: true,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-embed-video',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants',
          {
            resolve: '@weknow/gatsby-remark-twitter',
            options: {
              align: 'center',
            },
          },
          'gatsby-remark-external-links',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ishan Marikar',
        short_name: 'Ishan Marikar',
        start_url: '/',
        background_color: '#001724',
        theme_color: '#001724',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
  ],
}
