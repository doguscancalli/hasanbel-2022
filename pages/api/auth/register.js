import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
import sendTokenResponse from '../../../utils/sendTokenResponse'

export default async function handler(req, res) {
  return res.status(400).json({ success: false })

  const { method } = req
  const { email, password } = req.body

  await dbConnect()

  switch (method) {
    // @desc      Register user
    // @route     POST /api/auth/register
    // @access    Public
    case 'POST':
      try {
        // Create user
        const user = await User.create({
          email,
          password,
        })

        sendTokenResponse(user, 200, res)
      } catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
