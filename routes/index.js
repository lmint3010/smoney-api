const { ROOT_URL_API } = require.main.require('./config')
const passport = require('passport')
require.main.require('./config/passport')

// @Import routes
const test = require('./api/test')
const auth = require('./api/auth')
const history = require('./api/history')

// @Manager Group Routes
module.exports = app => {
  renderRoutesPublic('/', auth)
  renderRoutes('/', test)
  renderRoutes('/history', history)
  /**
   *
   * @Function render routes
   * @param {*} pathAPI String
   * @param {*} routes routes
   */
  function renderRoutesPublic(pathAPI, routes) {
    app.use(ROOT_URL_API + pathAPI, routes)
  }

  function renderRoutes(pathAPI, routes) {
    app.use(
      ROOT_URL_API + pathAPI,
      passport.authenticate('jwt', { session: false }),
      routes
    )
  }
}
