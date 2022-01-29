import dbConnect from '../../../utils/dbConnect'
import Post from '../../../models/Post'

export default async function handler(req, res) {
  const { method } = req
  let { limit, page } = req.query

  await dbConnect()

  switch (method) {
    // @desc      Get all posts
    // @route     GET /api/post
    // @access    Public
    case 'GET':
      try {
        limit = limit || 7
        page = page || 1
        const posts = await Post.paginate(
          {},
          { limit, page, sort: { createdAt: -1 } }
        )
        res.status(200).json({ success: true, data: posts })
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
