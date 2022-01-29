import dbConnect from '../../../../utils/dbConnect'
import Post from '../../../../models/Post'

export default async function handler(req, res) {
  const { method, body } = req

  await dbConnect()

  switch (method) {
    // @desc      Create new post
    // @route     POST /api/private/post/create
    // @access    Private
    case 'POST':
      try {
        const post = await Post.create(body)
        res.status(201).json({ success: true, data: post })
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
