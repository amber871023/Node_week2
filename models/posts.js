const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    content:{ 
      type: String,
      required: [true, 'Content 未填寫']
    },
    image:{
      type: String,
      default: ""
    },
    createdAt:{ //建立時間（轉Timestamp)
      type: Number,
      default: new Date().getTime(),
      select: false
    },
    name:{ //貼文名稱
      type: String,
      required: [true, '貼文姓名未填寫']
    },
    likes:{ //按讚數
      type: Number,
      default: 0
    },
    comments:{
      type: Number,
      default: 0
    }
  },
  {
    versionKey: false
  }
)

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
