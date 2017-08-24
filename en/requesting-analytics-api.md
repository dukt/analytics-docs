# Requesting Google Analytics’ API

## Request

Use [`craft.analytics.api`](craft.analytics.api.md) to request [Google Analytics Core Reporting API](https://developers.google.com/analytics/devguides/reporting/core/v4/) from your templates. 
It returns an `ReportRequestCriteria` object which is used to define the criteria and options of the request.
    
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

### Options

- `viewId` — View ID
- `gaViewId` — Google Analytics View ID
- `startDate` — Start date
- `endDate` — End date
- `samplingLevel` — Sampling level
- `metrics` — Metrics
- `dimensions` — Dimensions
- `orderBys` — Order Bys
- `pageSize` — Page size
- `pageToken` — A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken.
- `filtersExpression` — Filters expression
- `includeEmptyRows` — If set to false, the response does not include rows if all the retrieved metrics are equal to zero. The default is false which will exclude these rows.
- `hideTotals` — If set to true, hides the total of all metrics for all the matching rows, for every date range. The default false and will return the totals.
- `hideValueRanges` — If set to true, hides the minimum and maximum across all matching rows. The default is false and the value ranges are returned.
    
## Response

	{% if response.success %}
        <table class="table">
            <thead>
            <tr>
                <th>Keywords</th>
                <th>Sessions</th>
            </tr>
            </thead>

            <tbody>
			{% for row in response.report.data.rows %}
                <tr>
                    <td>{{ row.dimensions[0] }}</td>
                    <td>{{ row.metrics[0].values[0] }}</td>
                </tr>
			{% endfor %}
            </tbody>
        </table>
	{% else %}
        Error: {{ response.errorMessage }}
	{% endif %}