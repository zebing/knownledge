import { defineUserConfig, defaultTheme } from 'vuepress'
import autoSidebar from './plugins/auto_sidebar';
import path from 'path';

export default defineUserConfig({
  plugins: [],
  base: '/knownledge/',
  public: path.resolve(process.cwd(), 'public'),
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
  theme: defaultTheme({
    navbar: [
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
        text: 'Rust',
        link: '/rust/'
      },
      {
        text: 'ubuntu',
        link: '/ubuntu/'
      },
      {
        text: 'mac',
        link: '/mac/'
      },
      // {
      //   text: '业务',
      //   link: '/business/'
      // },
      // {
      //   text: '管理',
      //   link: '/management/'
      // },
    ],
    sidebar: autoSidebar,
  }),
})
