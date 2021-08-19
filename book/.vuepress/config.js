module.exports = {
  // title: 'Nutbox',
  description: 'Link Community to Web3.0',
  themeConfig: {
    logo: '/logo.svg',
    sidebar: {
      '/white_paper/': [
        'background',
        'nutbox',
        'applications',
        'economy',
        'dao_governance',
        'appendix'
      ],
      '/lite_paper_v1/': [
        'pnut',
        'tsp',
        'bridge',
        'tsteem_defi',
        'pnut_economic',
        'nutbox_v1',
        'roadmaps',
        'contract_account',
        'community',
        'donation',
        'user_guide',
        'faq'
      ],
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'White Paper', link: '/white_paper/' },
      { text: 'Peanut Lite Paper', link: '/lite_paper_v1/' }
    ],
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    repo: 'nutbox-dao/docs',
    docsDir: 'book',
    editLinks: true,
    smoothScroll: true
  }
}
