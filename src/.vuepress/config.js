module.exports = {
  base: '/knownledge',
  dest: 'docs',
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
        text: '客户端',
        link: '/client/'
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
        text: 'mac',
        link: '/mac/'
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
        {
          title: '设计模式',
          collapsable: true,
          children: [
            ['design-pattern/', '知识点'],
          ]
        },
        {
          title: '安全',
          collapsable: true,
          children: [
            ['safe/', '知识点'],
          ]
        },
        {
          title: '浏览器',
          collapsable: true,
          children: [
            ['browser/', '知识点'],
          ]
        },
        {
          title: '网络',
          collapsable: true,
          children: [
            ['network/', '知识点'],
          ]
        },
        {
          title: '性能优化',
          collapsable: true,
          children: [
            ['performance/', '知识点'],
          ]
        },
        {
          title: '工程化',
          collapsable: true,
          children: [
            'engineering/webpack',
            'engineering/vite',
            'engineering/rollup',
            'engineering/esbuild',
            'engineering/npm',
            'engineering/git',
          ]
        },
        {
          title: 'Typescript',
          collapsable: true,
          children: [
            ['typescript/', '知识点'],
          ]
        },
        {
          title: '部署',
          collapsable: true,
          children: [
            ['deploy/', '知识点'],
          ]
        },
        {
          title: '监控',
          collapsable: true,
          children: [
            ['monitor/', '知识点'],
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
      ],
      '/client/': [
        {
          title: 'Flutter',
          collapsable: true,
          children: [
            ['flutter/', '知识点'],
          ]
        },
        {
          title: 'react native',
          collapsable: true,
          children: [
            ['react-native/', '知识点'],
          ]
        },
        {
          title: 'CEF & Electron',
          collapsable: true,
          children: [
            ['CEF&Electron/', '知识点'],
          ]
        },
        {
          title: 'Hybrid',
          collapsable: true,
          children: [
            ['hybrid/', '知识点'],
          ]
        },
      ],
      '/algorithms/': [
        {
          title: '数据类型',
          collapsable: true,
          children: [
            ['structure/', '知识点'],
          ]
        },
        {
          title: '算法',
          collapsable: true,
          children: [
            ['algorithms/', '知识点'],
          ]
        },
      ],
      '/mac/': [
        {
          title: 'mac',
          collapsable: true,
          children: [
            'mysql',
            'nginx',
            'php',
            'phpadmin',
            'redis',
            'terminal_proxy',
          ]
        },
      ],
    }
  }
}