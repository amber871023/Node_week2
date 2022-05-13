const headers = require('../utils/headers');
const handleSuccess = require('../utils/handleSuccess');
const handleError = require('../utils/handleError');
const errorMsg = require('../utils/errorMsg');
const Post = require('../models/posts');

const getPosts = async (req,res) =>{
  const allPosts = await Post.find();
  handleSuccess(res , allPosts);
  res.end();
}
const createPost = async ({req, res, body}) =>{
  try{
    const data = JSON.parse(body);
    if(!data.content){
      handleError(res , errorMsg.POST);
      return; 
    };
    const newPost = await Post.create({
      content: data.content,
      image: data.image,
      name: data.name,
      likes: data.likes,
      comments: data.comments
    })
    handleSuccess(res, newPost);
  }catch{
    handleError(res, errorMsg.POST)
  }
}
const deleteMany = async (req, res) =>{
  try{
    await Post.deleteMany({});
    const data = await Post.find()
    handleSuccess(res, data);
  }catch{
    handleError(res, errorMsg.DELETES);
  }
}
const updatePost = async ({req, res, body}) =>{
  try{
    const id = req.url.split('/').pop();
    const data = JSON.parse(body);
    if(data.content && data.name){
      const editedPost = await Post.findByIdAndUpdate(id, data, { new: true });
      if(editedPost){
        handleSuccess(res, editedPost);
      }
    }else{
      handleError(res, errorMsg.PATCH);
    }
  }catch{
    handleError(res, errorMsg.PATCH);
  }
}
const deletePost = async (req, res) =>{
  try{
    const id = req.url.split('/').pop();
    const deleteOne = await Post.findByIdAndDelete(id);
    if(deleteOne){
      handleSuccess(res,deleteOne);
    }else{
      handleError(res, errorMsg.DELETE);
    }
  }catch{
    handleError(res, errorMsg.DELETE);
  }
}

module.exports = { getPosts, createPost, deleteMany, updatePost, deletePost };
