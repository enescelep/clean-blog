const Post = require('../models/Post');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add_post');
};

exports.getPosts = (req, res) => {
  res.render('post');
};

exports.getUpdatePage = async (req, res) => {
  const post = await Post.findOne({_id: req.params.id});
  res.render('update', {
    post
  });
};
