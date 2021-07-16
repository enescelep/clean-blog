const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const blog = {
    id: 1,
    title: 'Blog title',
    description: 'Blog description',
  };

  res.send(photo);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
