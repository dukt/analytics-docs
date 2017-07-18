# Analytics_RequestCriteriaModel

Analytics_RequestCriteriaModel objects are at the center of how Analytics plugin fetches data from the Google Analytics API.

## How it Works

Whenever you request the API in your templates, this happens:

1. An Analytics_RequestCriteriaModel object is created.
2. Parameters are set on the model.
3. The request is sent to the API base on Analytics_RequestCriteriaModel
4. The response is returned as an array

## Setting the Parameters

The main point of Analytics_RequestCriteriaModel objects is to define the parameters Analytics should factor in when it’s requesting the API for data.

There are two ways you can add parameters to your Analytics_RequestCriteriaModel object:

1. You can chain parameters onto the Analytics_RequestCriteriaModel as functions:

        {% set response = craft.analytics.api
            .startDate(date('-1 year')|date("Y-m-d"))
            .endDate('today')
            .metrics('ga:sessions')
            .optParams({
                'dimensions': 'ga:keyword',
                'sort': '-ga:sessions',
                'max-results': 10,
                'filters': 'ga:keyword!=(not set);ga:keyword!=(not provided)'
            }).send() %}
    
1. You can pass them all at once to the function that’s creating your Analytics_RequestCriteriaModel using an object:

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

    
## Fetching the data

Once you’ve set all of the parameters on your Analytics_RequestCriteriaModel, the last step is to send the request to the API and get the response data.

### send()

This function will send the request to the API and return the response data as an array.

    {% response = craft.analytics.api({
        
        ...

    }).send() %}