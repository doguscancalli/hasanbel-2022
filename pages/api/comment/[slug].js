import dbConnect from '../../../utils/dbConnect'
import Post from '../../../models/Post'
import Comment from '../../../models/Comment'

export default async function handler(req, res) {
  const { method, body } = req
  const { slug } = req.query

  await dbConnect()

  switch (method) {
    // @desc      Get comments for single post
    // @route     GET /api/comment/:slug
    // @access    Public
    case 'GET':
      try {
        const post = await Post.findOne({ slug })

        if (!post) {
          return res.status(404).json({
            success: false,
            message: `${slug} bu id ile bir yazı yok`,
          })
        }

        const comments = await Comment.find({
          _id: { $in: post.comments },
        }).sort({ createdAt: -1 })
        res.status(200).json({ success: true, data: comments })
      } catch (err) {
        res
          .status(400)
          .json({ success: false, message: new Error(err).message })
      }
      break
    // @desc      Create comment
    // @route     POST /api/comment/:slug
    // @access    Public
    case 'POST':
      try {
        const post = await Post.findOne({ slug })

        if (!post) {
          return res.status(404).json({
            success: false,
            message: `${slug} bu id ile bir yazı yok`,
          })
        }

        const comment = await Comment.create({ ...body, post: post._id })

        const postRelated = await Post.findOne({ slug })
        postRelated.comments.push(comment)
        await postRelated.save()

        res.status(200).json({ success: true, data: comment })
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
