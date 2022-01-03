const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use('/login', (req,res) => {
    res.send({
        token: 'test123'
    });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve("backend",  "build", "index.html"));
    });
}

app.listen(process.env.PORT || 8080, () => console.log('API is running on http://localhost:8080/'));