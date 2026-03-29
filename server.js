const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const dataFile = "data.json";

// Datei erstellen falls nicht vorhanden
if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]));
}

// ADD
app.post("/add", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dataFile));
        data.push(req.body);
        fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
});

// GET
app.get("/data", (req, res) => {
    try {
        const raw = fs.readFileSync(dataFile);
        const data = JSON.parse(raw);
        res.json(data);
    } catch (err) {
        console.error(err);
        res.json([]);
    }
});

// RESET
app.delete("/reset", (req, res) => {
    try {
        fs.writeFileSync(dataFile, JSON.stringify([], null, 2));
        console.log("DATA RESET durchgeführt");
        res.json({ success: true });
    } catch (err) {
        console.error("RESET ERROR:", err);
        res.status(500).json({ success: false });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server läuft auf Port " + PORT));
