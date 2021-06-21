const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, '..', 'frontend/static')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'frontend/index.html'));
});

app.listen(3000, () => {
    console.log("Server is runing on 3000");
})


