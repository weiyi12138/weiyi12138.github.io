import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import {zhNavbar,enNavbar} from './navbar.js'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  // title: '知识库',
  description: '私有知识库',
  plugins: [
    slimsearchPlugin({
       // 已启用全文搜索
      indexContent: true,
    }),
  ],
  locales: {
    '/': {
      selectLanguageName: '简体中文',
      selectLanguageText: '选择语言',
    },
    '/en/': {
      selectLanguageName: 'English',
      selectLanguageText: 'Language',
    },
  },
  theme: defaultTheme({
    style: {
      css: [], // 若有其他 css 文件可在此添加
      scss: ['@/styles/index.scss'], // 引入 index.scss
    },
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        navbar: zhNavbar,
        // sidebar: zhSidebar,
        notFound: ['没找到','网页走丢了'],
        backToHome: '返回首页'
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        navbar: enNavbar,
        // sidebar: enSidebar
      },
      navbar: ['/', '/get-started'],
    },
    logo: 'logo.png'
  }),
  bundler: viteBundler(),
})
