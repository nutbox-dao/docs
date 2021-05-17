module.exports = {
  // title: 'Nutbox',
  description: 'Build Your Own Staking Economy',
  themeConfig: {
    logo: '/logo.svg',
    sidebar: {
      '/white_paper/': [
        'background',
        'nutbox',
        'applications',
        'economy',
        'dao_governance',
        'appendix',
        'roadmaps',
        'documents'
      ],
      '/technical_paper/': [
        'background',
        'ocsp',
        'bridge',
        'parachain',
        'price_oracle',
        'governance_contracts',
        'references'
      ],
      '/peanut_lite_paper/': [
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
      '/donut/': [
        'solve',
        'structure',
        'application'
      ],
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'White Paper', link: '/white_paper/' },
      { text: 'Technical Paper', link: '/technical_paper/' },
      { text: 'Peanut Lite Paper', link: '/lite_paper_v1/' },
      { text: 'Donut', link: '/donut/' }
    ],
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    repo: 'nutbox-dao/docs',
    docsDir: 'book',
    editLinks: true,
    smoothScroll: true
  }
}
