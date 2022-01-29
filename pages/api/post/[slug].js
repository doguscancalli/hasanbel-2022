import dbConnect from '../../../utils/dbConnect'
import Post from '../../../models/Post'

export default async function handler(req, res) {
  const { method } = req
  const { slug } = req.query

  await dbConnect()

  switch (method) {
    // @desc      Get sing post
    // @route     POST /api/post/:slug
    // @access    Public
    case 'GET':
      try {
        const post = await Post.findOne({ slug })

        res.status(200).json({ success: true, data: post })
      } catch (err) {
        res
          .status(400)
          .json({ success: false, message: new Error(err).message })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
