const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Example route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
