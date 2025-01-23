const mongoose = require('mongoose');
mongoose.connect(process.env.MongoDB_URL).then(()=>{
    console.log('Connection established to DB');
}).catch(()=>{
    console.log('Not connected');
})