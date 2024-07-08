const express = require('express');
const app = express();
const port = 4000;
const routes = require('./api/endPoints');
const cors = require('cors')

app.use(cors({}));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}).on ('error', (err)=>{
    console.error('Failed to start server:',err);
});