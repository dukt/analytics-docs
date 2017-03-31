## Request

[`craft.analytics.api`](craft.analytics.api) lets you request Google Analytics' API from your templates. 
It returns an `Analytics_RequestCriteriaModel` object which is used to define the criteria and options of the request.

Most the of [Core Reporting API](https://developers.google.com/analytics/devguides/reporting/core/v3/reference) request parameters are supported.
You don't have to provide any profile id, the one you've set up in Analytics settings will automatically be used.
    
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
                {% for row in response.rows %}
                    <tr>
                        <td>{{row[0]}}</td>
                        <td>{{row[1]}}</td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    {% else %}
        Error: {{ response.errorMessage }}
    {% endif %}