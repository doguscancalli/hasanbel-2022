import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
import sendTokenResponse from '../../../utils/sendTokenResponse'

export default async function handler(req, res) {
  const { method } = req
  const { email, password } = req.body

  await dbConnect()

  switch (method) {
    // @desc      Login user
    // @route     POST /api/auth/login
    // @access    Public
    case 'POST':
      try {
        // Validate email & password
        if (!email || !password) {
          return res.status(400).json({
            success: false,
            message: 'Bir eposta ve şifre girin',
          })
        }

        // Check for user
        const user = await User.findOne({ email }).select('+password')

        if (!user) {
          return res.status(401).json({
            success: false,
            message: 'Hesap bilgisi geçersiz',
          })
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password)

        if (!isMatch) {
          return res.status(401).json({
            success: false,
            message: 'Hesap bilgisi geçersiz',
          })
        }

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
