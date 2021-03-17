module.exports = {
    title: 'Analytics Documentation',
    description: 'Analytics Documentation',
    base: '/docs/analytics/v4/',
    plugins: {
        '@vuepress/google-analytics': {
            'ga': 'UA-1547168-20'
        },
        'sitemap': {
            hostname: 'https://dukt.net/docs/analytics/v4/'
        },
    },
    themeConfig: {
        docsRepo: 'dukt/analytics-docs',
        docsDir: 'docs',
        docsBranch: 'v4',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        sidebar: {
         '/': [
             {
                 title: 'Analytics plugin for Craft CMS',
                 collapsable: false,
                 children: [
                     '',
                     'requirements',
                     'installation',
                     'connect-google-analytics',
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
