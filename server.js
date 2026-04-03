const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const PASSWORD = "anus";

function auth(req, res, next) {
    if (req.headers["x-password"] !== PASSWORD) {
        return res.status(401).json({ error: "unauthorized" });
    }
    next();
}

let data = [];

app.post("/add", auth, (req, res) => {
    data.push({ ...req.body, dead: false, cause: null });
    res.json({ success: true });
});

app.get("/data", auth, (req, res) => {
    res.json(data);
});

app.delete("/reset", auth, (req, res) => {
    data = [];
    res.json({ success: true });
});

app.post("/import", auth, (req, res) => {
    data = req.body;
    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
