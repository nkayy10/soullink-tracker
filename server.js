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

// Daten speichern
app.post("/add", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFile));
    data.push(req.body);
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.send({ success: true });
});

// PORT wichtig für Railway!
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server läuft auf Port " + PORT);
});