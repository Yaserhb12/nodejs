const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;
const articlesRoutes = require('./routes/articles');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
app.use('/api/articles', articlesRoutes);

app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
