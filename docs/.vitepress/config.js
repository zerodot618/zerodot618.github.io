module.exports = {
    title: 'ZeroDot618',
    description: 'ZeroDot618',
    lang: 'zh-CN',
    appearance: false,
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/img/logo.jpg',// 图片放在public文件夹下
            },

        ],
    ],
    themeConfig: {
        // logo
        logo: '/img/logo.jpg',
        // 头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: 'Golang', link: '/golang/' },
            { text: 'PHP', link: '/php/' },
            { text: '架构', link: '/architect/' },
            {
                text: '云原生',
                items: [
                    { text: 'Devops', link: '/cloud/devops/' },
                    { text: 'Docker', link: '/cloud/docker/' },
                ]
            },
            { text: '前端', link: '/frontend/' },
            { text: '区块链', link: '/blockchain/' },
            { text: 'Python', link: '/python/' },
            {
                text: '其他', items: [
                    { text: '数据库', link: '/other/sql/' },
                    { text: '硬件', link: '/other/hardware/' },
                    { text: '工具', link: '/other/tools/' },
                ]
            },
            { text: '关于', link: '/about/' },
        ],
        sidebar: {
            '/golang/': [
                {
                    text: 'Golang',
                    items: [
                        { text: '首页', link: '/golang/' },
                        { text: 'Go 语言简明教程', link: '/golang/go-language-concise-course/post' },
                    ]
                },
                {
                    text: '资源',
                    items: [
                        { text: '实战归纳', link: '/golang/resource/实战归纳' },
                        { text: '腾讯云文集', link: '/golang/resource/腾讯云文集' },
                        { text: '资料链接', link: '/golang/resource/资料链接' }
                    ]
                },
            ],
            '/php/': [
                {
                    text: 'PHP',
                    items: [
                        { text: '首页', link: '/php/' },
                    ]
                },
                {
                    text: '资源',
                    items: [
                        { text: '资料链接', link: '/php/resource/资料链接' },
                        { text: 'Github开源', link: '/php/resource/Github开源' },
                    ]
                },
            ],
            '/architect/': [
                {
                    text: '架构',
                    items: [
                        { text: '首页', link: '/architect/' },
                    ]
                },
                {
                    text: '从0开始学架构',
                    items: [
                        { text: '基础架构', link: '/architect/learn-architecture-from-zero/01-the-basic-architecture' },
                        { text: '高性能架构模式', link: '/architect/learn-architecture-from-zero/02-high-performance-architecture-pattern' },
                        { text: '高可用架构模式', link: '/architect/learn-architecture-from-zero/03-high-availability-architecture-patterns' },
                    ]
                },
                {
                    text: '资源',
                    items: [
                        { text: '微服务', link: '/architect/resource/微服务' },
                        { text: '缓存-队列-Redis-MongoDB', link: '/architect/resource/缓存-队列-Redis-MongoDB' },
                        { text: 'Elasticsearch文集', link: '/architect/resource/Elasticsearch文集' },
                        { text: 'HTTP文集', link: '/architect/resource/HTTP文集' },
                        { text: '文集链接', link: '/architect/resource/文集链接' },
                    ]
                },
            ]
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/zerodot618" },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present ZeroDot618'
        }
    },
}