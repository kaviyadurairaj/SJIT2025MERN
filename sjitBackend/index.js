const express = require('express');
const path = require('path'); // Import path module

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.resolve('D:\\full stack-mern\\sjitfrontend\\index.html'));
});

const PORT = 3001;
app.listen(PORT, () => console.log("Server started successfully on port " + PORT));

