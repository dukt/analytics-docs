module.exports = {
    title: 'Analytics 4 Documentation',
    description: 'Analytics 4 Documentation',
    base: '/analytics/v4/',
    ga: 'UA-1547168-34',
    themeConfig: {
        docsRepo: 'dukt/analytics-docs',
        docsDir: 'docs',
        docsBranch: 'v4',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        nav: [
            { text: 'Analytics', link: '/'},
            { text: 'Facebook', link: 'https://docs.dukt.net/facebook/v2/'},
            { text: 'Social', link: 'https://docs.dukt.net/social/v2/'},
            { text: 'Twitter', link: 'https://docs.dukt.net/twitter/v2/'},
            { text: 'Videos', link: 'https://docs.dukt.net/videos/v2/'},
        ],
        sidebar: {
         '/': [
             {
                 title: 'Getting Started',
                 collapsable: false,
                 children: [
                     '',
                     'requirements',
                     'installation',
                     'configuration',
                 ]
             },
             {
                 title: 'Widgets',
                 collapsable: false,
                 children: [
                     'ecommerce-widget',
                     'realtime-widget',
                     'report-widget',
                 ]
             },
             {
                 title: 'Fields',
                 collapsable: false,
                 children: [
                     'report-field',
                 ]
             },
             {
                 title: 'Advanced Topics',
                 collapsable: false,
                 children: [
                     'requesting-analytics-api',
                     'tracking',
                 ]
             }
         ],
        }
    }
}
