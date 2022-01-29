import dbConnect from '../../../../../utils/dbConnect'
import Post from '../../../../../models/Post'

export default async function handler(req, res) {
  const { method, body } = req
  const { id } = req.query

  await dbConnect()

  switch (method) {
    // @desc      Update post
    // @route     PUT /api/private/post/update/:id
    // @access    Private
    case 'PUT':
      try {
        let post = await Post.findByIdAndUpdate(id, body, {
          new: true,
          runValidator: true,
        })
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
