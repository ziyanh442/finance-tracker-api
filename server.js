const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Express on Vercel - test automation jira 2");
});

app.listen(port, () => {console.log(`app listening on port ${port}`)});

module.exports = app;