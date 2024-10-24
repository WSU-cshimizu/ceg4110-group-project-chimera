const express = require('express');
const app = express();

// Define routes and middleware here


router.get('/about/ ', (req, res) => {
  res.send('This is About Us page');
});

app.get('/explore/', (req, res) => {
  res.send('This is the explore page')
});

app.get('/contact/', (req, res) => {
  res.send('This is the contact page')
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
