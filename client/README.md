What to install:

npm install nodemon
npm install express axios

copy/paste follow to the "script"
(
    "start": "node app.js",
    "devStart": "nodemon app.js"
)
NOTE: this must be copy/paste to package.json file.

npm run devStart    (On the Server)
npm start           (on the client)


npm install cors
(Allows to communicate with API's that we create)

Axios vs Fetch (HTTP requests)

Axios uses Data Properties
Fetch uses Body properties

useEffect, this will be called whenever we refresh the page.
Arrayet indet i useEffect gør at useEffect bliver kørt 1 gang.
Grunden til at vi bruger useEffect på GET-requestet er fordi at
man ikke skal klikke på en knap.