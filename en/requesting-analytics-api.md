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