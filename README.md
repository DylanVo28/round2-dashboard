# Project structure React App
````sh
root
|
--/public
|
--/src
|
----/assets      This folder consists of images and fonts, ...
|
----/components  This folder, you can custom component in here such as button, image, input
|
----/config      This folder consists of a configuration file where we store environment variables in config.js
|
----/constants   This folder consists of  constant variables
|
----/contexts    This folder consists of provider to state management for page or layout
|
----/layouts     This folder consists of component such as header,footer,...
|
----/middleware  This folder consists of middleware that allows for side effects in the application
|
----/pages       This folder consists of page component such as Home, Sign in, Sign up
|
----/routes      This folder consists of all routes of the application. It consists of private, protected and all types of routes
|
----/services    This folder consists of call api of Round2-Service
|
----App.js       This file is a main file. It's render components base on routes
|
--.env           This file config to development environment
|
--.env.prod      This file config to production environment
````
