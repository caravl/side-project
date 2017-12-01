# WanderLove

Share your travel memories and recommendations with your friends.  See what they would share with you about their favorite places.

## Action Plan
// use trip planner spa's seed file (it has associations)
- [x] check associations
- [x] draw design schema
- [x] wireframe design (which pages to see)
- [x] check routes
- [ ] react-bootstrap
- [ ] components
- [ ] redux

## How to Start
```
npm run build-watch - to begin the build process
npm start - to start the app
```

## Back-End

### Sequelize Models

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

### Routes
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

## Design

React Bootstrap
  * [CoreUI](http://coreui.io/demo/React_Demo/#/dashboard)
  * [React Bootstrap](https://react-bootstrap.github.io/getting-started.html)

