const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// 👉 Passwort (ändern wie du willst)
const PASSWORD = "anus";

// 👉 Auth Middleware
function auth(req, res, next) {
    const pwd = req.headers["x-password"];

    if (pwd !== PASSWORD) {
        return res.status(401).json({ error: "unauthorized" });
    }

    next();
}

// 👉 Speicher
let data = [];

// ADD
app.post("/add", auth, (req, res) => {
    data.push(req.body);
    res.json({ success: true });
});

// GET
app.get("/data", auth, (req, res) => {
    res.json(data);
});

// RESET
app.delete("/reset", auth, (req, res) => {
    data = [];
    res.json({ success: true });
});

// IMPORT
app.post("/import", auth, (req, res) => {
    data = req.body;
    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server läuft auf Port " + PORT));
