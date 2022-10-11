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
                    text: '链接',
                    items: [{ text: 'Golang', link: '/golang/' },]
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