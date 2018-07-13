# POC - load external site

How to load external react web app.

Created a simple web app based on create-react-app that will simlulate the external web. Create-react-app webserver (run yarn start) is blocking external calls to manifest.json so I had to implement a static web server (/static_webserver).
thePage.html inside web folder will simulate the place where you want to load the external react web. Before you fire upp the web server thePage.html should not render anything.

## How to...

yarn  
yarn build  
cd /static_webserver  
node app.js  
cd /web  
open thePage.html in the browser  
