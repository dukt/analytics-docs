# Installing & Updating

## Installing

### Step 1: Install the Analytics plugin

1. [Download the Analytics plugin](/craft/analytics/download)
1. Unzip the plugin folder in `craft/plugins/analytics`.
1. Go to **Control Panel > Settings > Analytics** and follow the installation instructions.

### Step 2: Install the OAuth plugin

Analytics plugin requires {entry:4:link} plugin in order to authenticate to Google Analytics.

[Install the OAuth plugin]({entry:319:url}) and move on to the next step.

### Step 3: Connect to Google Analytics

Now that the OAuth and Analytics plugins are installed, you are ready to {entry:435:link}.

## Updating

1. [Download the Analytics plugin](/craft/analytics/download)
1. In `craft/plugins/`, rename the `analytics` folder to `analytics-old`
1. Unzip the Analytics plugin to the `craft/plugins/analytics` folder
1. Navigate to your Craft control panel to run migrations (if any)
1. The `analytics-old` folder can be deleted