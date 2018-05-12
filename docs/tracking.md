# Tracking

## Tracking Object

    {% set analyticsTracking = craft.analytics.tracking() %}
    
## Usage

    {% set trackingId = 'UA-XXXXXXX-XX' %}

    {% set analyticsTracking = craft.analytics.tracking().setTrackingId(trackingId) %}
    
    {% do analyticsTracking
        .setDocumentPath('/mypage')
        .setDocumentTitle("My page")
        .sendPageview()
    %}
