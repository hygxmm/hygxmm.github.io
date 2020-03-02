module.exports = {
    title: '前端笔记',//网站标题
    description: 'HTML/ CSS / JavaScript / Vue / React / Angular / Node / Flutter / 微信小程序 / 数据结构 / 算法 / 浏览器 / 网络 / 优化',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],//设置显示在浏览器标签页中的图标
    ],
    port: 8085,
    markdown: {
        lineNumbers: true,//代码块显示行数
    },
    evergreen: true,//不向下兼容IE及低版本浏览器,加快构建速度
    themeConfig: {
        nav: [
            { text: '', link: '' },
        ],
        smoothScroll: true,
        navbar: false,
        sidebarDepth: 2,
        sidebar: [
            ['/pages/', '简介'],
            ['/pages/grammar/', 'Markdown语法'],
            {
                title: 'HTML',
                children: [
                    ['/pages/html/', '奇淫巧计'],
                    ['/pages/html/notification.md', 'Notification 桌面通知'],
                ]
            },
            {
                title: 'CSS',
                children: [
                    ['/pages/css/skill', '常用示例']
                ]
            },
            {
                title: 'JavaScript',
                children: [
                    ['/pages/javascript/', '基础'],
                    ['/pages/javascript/array.md', '数组'],
                    ['/pages/javascript/event.md', '事件循环'],

                ]
            },
            ['/pages/structure/', '数据结构'],
            {
                title: '算法',
                children: [
                    ['/pages/algorithm/', '简介'],
                    ['/pages/algorithm/', '排序算法'],
                ]
            },
            {
                title: '设计模式',
                children: [
                    ['/pages/algorithm/', '简介'],
                    ['/pages/algorithm/', '排序算法'],
                ]
            },
            {
                title: '浏览器',
                children: [
                    ['/pages/browser/render.md', '渲染'],
                    ['/pages/browser/storage.md', '存储']
                ]
            },
            {
                title: '网络',
                children: [
                    ['/pages/network/http.md', 'HTTP协议'],
                ]
            },
            {
                title: 'React',
                children: [
                    ['/pages/react/', '简介']
                ]
            },
            {
                title: 'Vue',
                children: [
                    ['/pages/vue/', 'Vue 简介'],
                    ['/pages/vue/vuex.md', 'Vuex 状态管理'],
                    ['/pages/vue/vue-router.md', 'Vue-router 路由']
                ]
            },
            {
                title: 'Node',
                children: [
                    ['/pages/node/', '简介'],
                    ['/pages/node/fs.md', 'fs-文件模块'],
                    ['/pages/node/zlib.md', 'zlib-压缩模块']
                ],
            },
            {
                title: 'Flutter',
                children: [
                    ['/pages/flutter/', 'Flutter 简介'],
                    ['/pages/flutter/flex.md', 'Flutter Flex布局组件'],
                    ['/pages/flutter/button.md', 'Flutter Widget 之 Button'],
                    ['/pages/flutter/input.md', 'Flutter Widget 之 Input'],
                    ['/pages/flutter/container.md', 'Flutter Widget 之 Container'],
                ],
            },
            {
                title: '面试',
                children: [
                    ['/pages/interview/', '面试相关']
                ]
            },
            {
                title: '示例',
                children: [
                    ['/pages/example/', "示例"]
                ]
            }
        ]
    },
    evergreen: true,
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
    ],
}