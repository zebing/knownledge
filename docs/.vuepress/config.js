module.exports = {
  base: '/',
  dest: 'dist',
  title: '个人知识库',
  description: 'Analysis vue.js deeply',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'zebing/knownledge',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: "前端",
				link: '/web/'
      },
      {
        text: '后端',
        link: '/back/'
      },
      {
        text: '算法',
        link: '/algorithms/'
      },
      {
        text: 'ubuntu',
        link: '/ubuntu/'
      },
      {
        text: '业务',
        link: '/business/'
      },
      {
        text: '管理',
        link: '/management/'
      },
    ],
    sidebar: {
      '/web/': [
        {
          title: 'JavaScript',
          collapsable: true,
          children: [
            ['javascript/', '知识点'],
            'javascript/others',
          ]
        },
        {
          title: 'CSS3',
          collapsable: true,
          children: [
            ['css3/', '知识点'],
          ]
        },
        {
          title: 'HTML5',
          collapsable: true,
          children: [
            ['html5/', '知识点'],
          ]
        },
        {
          title: 'vue',
          collapsable: true,
          children: [
            ['vue/', '知识点'],
            'vue/2.0',
            'vue/3.0',
            'vue/others',
          ]
        },
        {
          title: 'react',
          collapsable: true,
          children: [
            ['react/', '知识点'],
          ]
        },
      ],
      '/back/': [
        {
          title: 'Nodejs',
          collapsable: true,
          children: [
            ['nodejs/', '知识点'],
          ]
        },
      ]
    }
  }
}