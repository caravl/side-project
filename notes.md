- check associations
- download react-bootstrap
- store(state) how much info to store on the front?

- draw design schema
- wireframe design (which pages to see)
- check routes

npm run build-watch - to begin the build process
npm start - to start the app

DB
  * User
    * Name
    * Email
  * Activity
    * Name
    * Location
    * Type
      * food
      * entertainment
      * museum
  * Destination
    * City Name
    * Country Name

  * Associations
    * Activity belongsTo Destination
    * Suggestion belongsTo User
    * Suggestion belongsTo Activity
    * Activity belongsToMany User (through table is `Suggestion`)

ROUTES
  * User
    * GET
      * ALL
      * by Id
    * POST
    * PUT
    * DELETE

  * Destination
    * POST
    * PUT
    * GET
      * ALL - where country = x
      * by Id
    * DELETE

  * Activity
    * POST
    * PUT
    * DELETE
    * GET
      * ALL
      * by Id

  * Suggestion (a user makes specific thoughts about an activity)
    * POST
    * PUT
    * DELETE
    * GET
      * ALL (where user ID)
      * ALL (where Activity)
      * ALL (where Activity country)

Design Schema
React Bootstrap
  * http://coreui.io/demo/React_Demo/#/dashboard
  * https://react-bootstrap.github.io/getting-started.html

