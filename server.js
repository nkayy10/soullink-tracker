const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const dataFile = "data.json";

if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]));
}

app.post("/add", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFile));
    data.push(req.body);
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.send({ success: true });
});
app.delete("/reset", (req, res) => {
    fs.writeFileSync(dataFile, JSON.stringify([]));
    res.send({ success: true });
});

app.get("/data", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFile));
    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server läuft auf Port " + PORT));
