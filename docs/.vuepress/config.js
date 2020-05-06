module.exports = {
    title: 'Akara的随笔',
    theme: '@vuepress/theme-blog',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        globalPagination: {
            lengthPerPage: '12'
        },
        summary: false,
        paginationComponent: 'SimplePagination',
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '技术博客',
                link: 'https://messiahhh.github.io/blog/'
            }
        ],
        directories: [
            {
                id: 'writing',
                dirname: '_writings',
                path: '/',
            }
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/Messiahhh'
                }
            ],
            copyright: [
                {
                  text: 'Privacy Policy',
                  link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                  text: 'MIT Licensed | Copyright © 2020-present Akara',
                  link: '',
                },
            ]
        }
    }
}
