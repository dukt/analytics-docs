module.exports = {
    title: 'Analytics 4 Documentation',
    description: 'Analytics 4 Documentation',
    base: '/docs/analytics/v4/',
    ga: 'UA-1547168-34',
    themeConfig: {
        nav: [
            { text: 'Analytics', link: '/'},
            { text: 'Facebook', link: 'https://dukt.net/docs/facebook/v2/'},
            { text: 'Social', link: 'https://dukt.net/docs/social/v2/'},
            { text: 'Twitter', link: 'https://dukt.net/docs/twitter/v2/'},
            { text: 'Videos', link: 'https://dukt.net/docs/videos/v2/'},
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