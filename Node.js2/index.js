const express = require('express');
const cors = require('cors');
const app = express();
const articleRoutes = require('./routes/articles');

app.use(cors());
app.use(express.json());

app.use('/api/articles', articleRoutes);

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
