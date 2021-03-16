module.exports = {
  // title: 'Nutbox',
  description: 'Y Combinator of Steem Blockchain',
  themeConfig: {
    logo: '/logo.svg',
    sidebar: {
      '/lite_paper_v2/': [
        'asset_contract',
        'staking_defi',
        'dapp',
        'no_code',
        'application_examples',
        'two_network',
        'economic',
        'governance',
        'roadmaps'
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
      '/white_paper/': [
        'background',
        'sco',
        'lst',
        'yield_farming',
        'community_dao',
        'dapp_launcher',
        'security_pos',
        'nutbox_economy',
        'nutbox_dao',
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
      '/donut/': [
        'solve',
        'structure',
        'application'
      ],
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lite Paper v2', link: '/lite_paper_v2/' },
      { text: 'Lite Paper v1', link: '/lite_paper_v1/' },
      { text: 'White Paper', link: '/white_paper/' },
      { text: 'Technical Paper', link: '/technical_paper/' },
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
