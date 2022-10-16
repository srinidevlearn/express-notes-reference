import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { hopeTheme } from 'vuepress-theme-hope';
import { sidebar } from './sidebarData'
import { getDirname, path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url)
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  lang: 'en-US',
  pure: true,
  title: 'Quick-Reference-Notes',
  description: '',
  base:"/express-notes/",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap' }]
    // ['script',{src:'https://embed.runkit.com'}]
  ],
  plugins: [
    componentsPlugin({
      // addThis: "ra-5f829c59e6c6bc9a",
      backToTop: true,
      components: [
        // "Badge",
        // "BiliBili",
        // "CodePen",
        // "FontIcon",
        // "PDF",
        "StackBlitz",
        // "VideoPlayer",
        // "YouTube",
      ],
      iconAssets: "iconfont",
    }),
    mdEnhancePlugin({
      // Enable Code Demo
      demo: true,
      codetabs: true,
      container: true,
      presentation: true,
      tasklist: true,
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),

    ['vuepress-plugin-code-copy', true],
    searchPlugin({
      // getExtraFields: (page) => page.frontmatter.tags,
      locales: {
        '/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
      maxSuggestions: 15,
      hotKeys: ['s', '/'],
      locales: {
        '/': {
          placeholder: 'Search',
        }
      },
    }
    })
  ],


  theme: hopeTheme({
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png?20170429090805#center',
      nav: [

    ],
    smoothScroll: true,
    sidebar,
    sidebarDepth:2,
    mdEnhance: {
      footnote: true,
      container: true,

    },
    // sidebar object
    // pages under different sub paths will use different sidebar
    // sidebar: {

    //   '/intro/': [
    //     {
    //       text: 'Mongo introduction',
    //       children: ['/intro/index.md','/intro/mongosetup.md'],
    //     },
    //   ],
    //   '/dboperation/': [
    //     {
    //       text: 'MongoDB Operations',
    //       children: ['/dboperation/createdb.md', '/dboperation/deletedb.md'],
    //     },
    //   ],
    // },
  }),
})
