import dbConnect from '../../../../../utils/dbConnect'
import Post from '../../../../../models/Post'

export default async function handler(req, res) {
  const { method, body } = req
  const { id } = req.query

  await dbConnect()

  switch (method) {
    // @desc      Delete post
    // @route     DELETE /api/private/post/delete/:id
    // @access    Private
    case 'DELETE':
      try {
        await Post.findByIdAndRemove(id)
        res.status(200).json({ success: true, data: {} })
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
