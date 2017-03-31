# Configuration

In addition to the settings available in the CP > Settings > Analytics screen, the config items below can be placed into an `analytics.php` file in your craft/config directory:

## realtimeRefreshInterval

Interval at which the realtime widget should refresh its data (in seconds)

    'realtimeRefreshInterval' => 15,

## cacheDuration

The amount of time cache should last.

The value should be set as a [PHP date interval](http://www.php.net/manual/en/dateinterval.construct.php).

    'cacheDuration' => 'PT10M',

## enableCache

Whether request to APIs should be cached or not

    'enableCache' => true,

## enableWidgets

Whether Analytics dashboard widgets are enabled or disabled

    'enableWidgets' => true,

## enableFieldtype

Whether Analytics fieldtype is enabled or not

    'enableFieldtype' => true,

## filters

Apply filters to requests sent to the Google Analytics Core Reporting API.

	'filters' => [
		'ga:hostname==sub.domain.com'
	]