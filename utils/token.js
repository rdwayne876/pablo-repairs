const jwt = require( 'jsonwebtoken')
require( 'dotenv').config()

exports.createAccessToken = function( user){
    return jwt.sign( user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m'})
}