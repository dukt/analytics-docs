You can access Google Analytics' [Core Reporting API](https://developers.google.com/analytics/devguides/reporting/core/v3/reference) from your templates via craft.analytics.api. It returns an `Analytics_RequestCriteriaModel` object.

    {% set response = craft.analytics.api({
        startDate: date('-1 year')|date("Y-m-d"),
        endDate: 'today',
        metrics: 'ga:sessions',
        optParams:{
            'dimensions': 'ga:keyword',
            'sort': '-ga:sessions',
            'max-results': 10,
            'filters': 'ga:keyword!=(not set);ga:keyword!=(not provided)'
        }
    }).send() %}
    
## Parameters

`craft.analytics.api` supports the following parameters:

### ids

Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. It is automatically filled with the profile ID selected in Analytics' settings.

### startDate

Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.

### endDate

End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.

### metrics

A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.

### optParams

Optional parameters.

- `max-results` The maximum number of entries to include in this feed.
- `sort` A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
- `dimensions` A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
- `start-index` An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
- `segment` An Analytics segment to be applied to data.
- `samplingLevel` The desired sampling level.
- `filters` A comma-separated list of dimension or metric filters to be applied to Analytics data.
- `output` The selected format for the response. Default format is JSON.

### format

By default, the response is formatted into a custom array by Analytics. Set this option to `gaData` to get the Google_Service_Analytics_GaData (or Google_Service_Analytics_RealtimeData for realtime) object instead.

### realtime

When set to `true`, the request will be performed using the Realtime API, otherwise it will use the regular API. Default is `false`.

### enableCache

When set to `true` the response is cached. The cached response will expire according to `analyticsCacheDuration` and `realtimeRefreshInterval` config settings. Default is `true`.