const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://cis-275.emilykauffman.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title:
      "<a href='https://emilykauffman/'>Emily Kauffman</a>",
      // "<a href='https://cis275.emilykauffman.io/learn/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",

    githubUrl: 'https://github.com/kauffmanes/cis275-course',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    
    // add trailing slash if enabled above
    forcedNavOrder: [
      '/introduction',
      '/syllabus',
      '/week1',
      '/week2',
      '/week3',
      '/week4',
      '/week5',
      '/week6',
      '/week7',
      '/week8',
      '/week9',
      '/week10',
      '/week11',
      '/week12',
      // '/week13',
      // '/week14',
      // '/week15'
    ],
    collapsedNav: [
      // '/week1',
      // '/week2',
      // '/week3',
      // '/week4',
      // '/week5',
      // '/week6',
      // '/week7',
      // '/week8',
      // '/week9',
      // '/week10',
      // '/week11',
      // '/week12',
      // '/week13',
      // '/week14',
      // '/week15'
    ],
    links: [{ text: 'Emily Kauffman', link: 'https://emilykauffman.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='/'>CIS 275 </a><div class='greenCircle'></div><a href='/introduction/'>get started</a>",
  },
  siteMetadata: {
    title: 'CIS 275 | Emily Kauffman',
    description: 'Coursework for CIS 275',
    ogImage: null,
    docsLocation: '',
    // favicon: 'src/pwa-512.png'
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'CIS 275 Course',
      short_name: 'cis275-course',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
