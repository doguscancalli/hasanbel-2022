import mongoose from 'mongoose'
import slug from 'mongoose-slug-updater'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Başlık alanı zorunludur'],
    },
    slug: {
      type: String,
      slug: 'title',
    },
    text: {
      type: String,
      required: [true, 'Yazı alanı zorunludur'],
    },
    image: {
      type: String,
      required: [true, 'Yazı eklemek için bir resim eklemelisiniz'],
    },
    imageSource: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
)

PostSchema.plugin(mongoosePaginate)

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
