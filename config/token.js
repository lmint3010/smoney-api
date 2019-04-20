const jwt = require('jsonwebtoken')
const { ExtractJwt } = require('passport-jwt')
const secret = 'dongnguyenvie'

module.exports = {
  createdToken(user) {
    const { _id, name, email, userName } = user
    const payload = { _id, name, email, userName }
    return jwt.sign(payload, secret)
  },
  checkTokenExpire({ exp }) {
    const now = Date.now() / 1000
    return now > exp ? false : true
  },
  JWTStrateyOption: {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
  },
}
