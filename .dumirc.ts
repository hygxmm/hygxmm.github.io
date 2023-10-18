import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: '六度空间',
    logo: false,
    nav: [
      { title: 'HTML', link: '/html' },
      { title: 'CSS', link: '/css' },
      { title: 'JavaScript', link: '/javascript' },
      // { title: 'Vue', link: '/vue' },
      { title: 'React', link: '/react' },
      { title: 'Flutter', link: '/css' },
      { title: 'Other', link: '/other' },
    ],
    sidebar: {
      '/html': [
        {
          title: '基础',
          children: [{ title: 'HTML原生API', link: '/html' }],
        },
        {
          title: '进阶',
          children: [{ title: '啊啊', link: '/html/notification' }],
        },
        {
          title: '案例',
          children: [{ title: '动画', link: '/html/example' }],
        },
        {
          title: 'API',
          children: [
            {
              title: 'IntersectionObserver',
              link: '/html/intersection',
            },
          ],
        },
      ],
      '/css': [
        {
          title: 'CSS基础',
          link: '',
          children: [],
        },
        {
          title: '示例',
          children: [
            { title: '常用', link: '/css/example' },
            { title: 'Loading效果', link: '/css/loading' },
          ],
        },
      ],
      '/javascript': [
        {
          title: '基础',
          children: [
            { title: '数据类型', link: '/javascript' },
            { title: '数组', link: '/javascript/array' },
            { title: 'event', link: '/javascript/event' },
          ],
        },
        {
          title: '示例',
          children: [{ title: '常用', link: '/javascript/example' }],
        },
      ],
      '/react': [
        {
          title: '基础知识',
          children: [
            { title: 'JSX', link: '/react' },
            { title: 'API', link: '/react/api' },
          ],
        },
      ],
      '/other': [
        {
          title: 'TypeScript',
          children: [
            { title: '入门', link: '/other/typescript/basics' },
            { title: '进阶', link: '/other/typescript/advanced' },
            { title: '实战', link: '/other/typescript/combat' },
          ],
        },
        {
          title: 'Docker',
          children: [{ title: '介绍', link: '/other/docker' }],
        },
        {
          title: 'Puppeteer',
          children: [{ title: '介绍', link: '/other/docker' }],
        },
        {
          title: 'Nginx',
          children: [{ title: '介绍', link: '/other/nginx' }],
        },
        {
          title: '微信小程序',
          children: [{ title: '介绍', link: '/other/nginx' }],
        },
        {
          title: '微信公众号',
          children: [{ title: '介绍', link: '/other/wx_h5' }],
        },
        {
          title: '常用插件推荐',
          children: [{ title: '介绍', link: '/other/plugin' }],
        },
      ],
    },

    footer: false,
  },
  sassLoader: {
    implementation: require('sass'),
  },
});
