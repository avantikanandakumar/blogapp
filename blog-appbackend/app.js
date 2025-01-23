const express = require('express');
const app = express();
const cors=require('cors')
const blogRoutes=require('./routes/blog-routes');
const userRoutes=require('./routes/userRoutes');
app.use(cors());

app.use('/blogapplication',blogRoutes);
app.use('/user',userRoutes);

require('dotenv').config();
require('./db/connection');

// Start the server
app.listen(3000, () => {
    console.log('Employee app listening on port 3000!');
});
