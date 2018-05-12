# craft.analytics.api

You can access the [Google Analytics Core Reporting API](https://developers.google.com/analytics/devguides/reporting/core/v3/reference) from your templates via `craft.analytics.api`. It returns an `ReportRequestCriteria` object.

    {% set response = craft.analytics.api({
        viewId: 1,
        startDate: date('-1 year')|date("Y-m-d"),
        endDate: 'today',
        metrics: 'ga:sessions',
        dimensions: 'ga:keyword',
        orderBys: [
            {"fieldName": 'ga:sessions', "orderType": 'VALUE', "sortOrder": 'DESCENDING'}
        ],
        pageSize: 10,
        filtersExpression: 'ga:keyword!=(not set);ga:keyword!=(not provided)'
    }).send() %}
    
## Parameters

`craft.analytics.api` supports the following parameters:

### viewId

Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. It is automatically filled with the profile ID selected in Analytics' settings.

### startDate

Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.

### endDate

End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.

### samplingLevel

The desired report sample size. If the the samplingLevel field is unspecified the DEFAULT sampling level is used.

- `DEFAULT` — Returns response with a sample size that balances speed and accuracy.
- `SMALL` — It returns a fast response with a smaller sampling size.
- `LARGE` — Returns a more accurate response using a large sampling size. But this may result in response being slower.

### dimensions

A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.

### metrics

A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.

### filtersExpression

A comma-separated list of dimension or metric filters to be applied to Analytics data.

### orderBys

Sort data by `fieldName`, `orderType` and `sortOrder`.

### pageToken

A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken.

### pageSize

Page size is for paging and specifies the maximum number of returned rows. Page size should be >= 0. A query returns the default of 1,000 rows. The Analytics Core Reporting API returns a maximum of 10,000 rows per request, no matter how many you ask for. It can also return fewer rows than requested, if there aren't as many dimension segments as you expect. For instance, there are fewer than 300 possible values for ga:country, so when segmenting only by country, you can't get more than 300 rows, even if you set pageSize to a higher value.
