module.exports = {
    title: 'Analytics 4 Documentation',
    description: 'Analytics 4 Documentation',
    base: '/analytics/v4/',
    themeConfig: {
        nav: [
            { text: 'Analytics', link: '/'},
            { text: 'Social', link: 'http://docs.dukt.test/social/v2'},
            { text: 'Videos', link: 'http://docs.dukt.test/videos/v2'},
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