# Analytics for Craft CMS

Customizable statistics widgets and entry tracking for Craft & Google Analytics.

-------------------------------------------

## Requirements

This plugin requires Craft CMS 3.0.0-beta.1 or later.

## Installation

To install the plugin, follow these instructions.

1. Open your terminal and go to your Craft project:

        cd /path/to/project

2. Then tell Composer to load the plugin:

        composer require dukt/craft-analytics

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for Analytics.

## Setup

Go to Settings → Plugins → Analytics and follow the instructions to connect to Google Analytics.

## Configuration
In addition to the settings available in the CP > Settings > Analytics screen, the config items below can be placed into an `analytics.php` file in your craft/config directory:

### realtimeRefreshInterval

Interval at which the realtime widget should refresh its data (in seconds)

    'realtimeRefreshInterval' => 15,

### cacheDuration

The amount of time cache should last.

The value should be set as a [PHP date interval](http://www.php.net/manual/en/dateinterval.construct.php).

    'cacheDuration' => 'PT10M',

### enableCache

Whether request to APIs should be cached or not

    'enableCache' => true,

### enableWidgets

Whether Analytics dashboard widgets are enabled or disabled

    'enableWidgets' => true,

### enableFieldtype

Whether Analytics fieldtype is enabled or not

    'enableFieldtype' => true,

### filters

Apply filters to requests sent to the Google Analytics Core Reporting API.

	'filters' => [
		'ga:hostname==sub.domain.com'
	]

## Widgets

### Realtime Widget

### Report Widget

## Fields

### Report Field

## Learn more

- [Plugin Overview](https://dukt.net/analytics)
- [Documentation](https://dukt.net/analytics/docs)

[Dukt.net](https://dukt.net/) © 2017 - All rights reserved