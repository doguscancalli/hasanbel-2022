import dbConnect from '../../utils/dbConnect'
import Post from '../../models/Post'

export default async function handler(req, res) {
  try {
    let data = []

    await dbConnect()
    await Post.create(data)
    res.status(400).json({ success: true })
  } catch (err) {
    console.log(err)
  }
}
