import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: '六度空间',
    logo: false,
    nav: [
      { title: 'HTML', link: '/html' },
      { title: 'CSS', link: '/css' },
      { title: 'JavaScript', link: '/css' },
      { title: 'Vue', link: '/css' },
      { title: 'React', link: '/css' },
      { title: 'Flutter', link: '/css' },
      { title: 'Other', link: '/other' },
    ],
    sidebar: {
      '/html': [
        {
          title: '基础', children: [
            { title: 'HTML原生API', link: '/html' }
          ]
        },
        {
          title: '进阶', children: [
            { title: '啊啊', link: '/html/notification' }
          ]
        },
        {
          title: '案例', children: [
            { title: '啊啊', link: '/html/example' }
          ]
        },
        {
          title: '其他', children: [
            { title: '啊啊', link: '/html/example' }
          ]
        },


      ],
      '/css': [
        {
          title: 'CSS基础', link: '', children: []
        }
      ],
      '/other': [
        {
          title: 'Docker', children: [
            { title: '介绍', link: '/other/docker' }
          ]
        },
        {
          title: 'Puppeteer', children: [
            { title: '介绍', link: '/other/docker' }
          ]
        },
        {
          title: 'Nginx', children: [
            { title: '介绍', link: '/other/nginx' }
          ]
        }
      ]
    },

    footer: false,
  },
});
