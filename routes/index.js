const { ROOT_URL_API } = require.main.require('./config')
const auth = require('./api/auth')
const passport = require('passport')
require.main.require('./config/passport')
const test = require('./api/test')

module.exports = app => {
  renderRoutesPublic('/', auth)
  renderRoutes('/', test)
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
