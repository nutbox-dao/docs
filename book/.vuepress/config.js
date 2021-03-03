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
        'bridge'
      ],
      '/white_paper/': [
        'dapp_incubator',
        'nutbox_finance',
        'layer2',
        'features',
        'ecosystem',
        'roadmap',
        'contract_account',
        'community',
        'donation',
        'user_guide',
        'developer_resources',
        'faq',
        'nutbox_glossary',
        'defi_glossary'
      ],
      '/technical_paper/': [
      ],
      '/donut/': [
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
