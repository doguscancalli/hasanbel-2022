import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'İsim alanı zorunludur'],
    },
    text: {
      type: String,
      required: [true, 'Yorum alanı zorunludur'],
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Comment ||
  mongoose.model('Comment', CommentSchema)
