import cookie from 'cookie'

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken()

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  }

  res
    .status(statusCode)
    .setHeader('Set-Cookie', cookie.serialize('token', token, options))
    .json({
      success: true,
      token,
    })
}

export default sendTokenResponse
