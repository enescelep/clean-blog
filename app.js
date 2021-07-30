const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController')

const app = express();

// CONNECT TO DB
mongoose.connect('mongodb+srv://cleanBlog:97VPkjnqNfCR48W@cleanblogcluster.oo4ha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload({}));
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//ROUTES
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPostByID);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage);
app.get('/posts', pageController.getPosts);
app.get('/posts/update/:id', pageController.getUpdatePage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
