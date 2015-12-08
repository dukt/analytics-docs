## Requirements

- Craft 2.4+
- A Google Analytics account
- {entry:4:link} plugin
- PHP 5.4+

## Installation

1. Download and unzip the Analytics plugin.
1. Drop the `analytics` plugin folder in `craft/plugins`.
1. Go to **Admin / Analytics** and follow the installation instructions.

Now that the plugin is installed, you are ready to {entry:435:link}

## Updating Instructions
1. Download and unzip the Analytics plugin.
1. Replace `craft/plugins/analytics` folder by the one that you have downloaded.


## Caching

By default, calls made to Google Analytics API are cached for 30 minutes. You can change the expiry through a config variable in `craft/config/general.php`.

The duration must be expressed in seconds:

	'analyticsCacheExpiry' => 1800
	
Caching settings will not apply to Real-Time API calls which are **not** being cached.