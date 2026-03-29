<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<title>SoulLink Tracker</title>

<style>
:root {
    --red: #e63946;
    --red-dark: #c1121f;
    --bg: #0f172a;
    --card: #1e293b;
    --text: #e5e7eb;
    --border: #334155;
}

body {
    margin: 0;
    font-family: system-ui;
    background: var(--bg);
    color: var(--text);
}

/* HEADER */
header {
    background: #020617;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-size: 18px;
    font-weight: 600;
}

/* MENU */
.menu {
    position: relative;
}

.menu-btn {
    background: var(--card);
    border: none;
    color: white;
    padding: 8px 14px;
    border-radius: 20px;
    cursor: pointer;
}

.menu-content {
    display: none;
    position: absolute;
    right: 0;
    background: var(--card);
    padding: 10px;
    border-radius: 10px;
    width: 200px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.menu:hover .menu-content {
    display: block;
}

/* LAYOUT */
.container {
    max-width: 900px;
    margin: auto;
    padding: 20px;
}

/* CARD */
.card {
    background: var(--card);
    padding: 20px;
    border-radius: 16px;
    margin-bottom: 20px;
}

/* INPUT */
.label {
    font-size: 13px;
    color: #94a3b8;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: #020617;
    color: white;
    margin-bottom: 10px;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

/* BUTTON */
.btn {
    padding: 10px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-weight: 600;
}

.primary {
    background: var(--red);
    color: white;
}

.primary:hover {
    background: var(--red-dark);
}

.secondary {
    background: #334155;
    color: white;
}

/* TABLE */
table {
    width: 100%;
    border-collapse: collapse;
}

th {
    text-align: left;
    padding: 10px;
    color: #94a3b8;
    border-bottom: 1px solid var(--border);
}

td {
    padding: 12px;
    border-bottom: 1px solid var(--border);
    text-align: center;
}

tr:hover {
    background: #020617;
}

/* MODAL */
.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
}

.modal-content {
    background: var(--card);
    padding: 20px;
    border-radius: 12px;
    width: 300px;
    margin: 15% auto;
    text-align: center;
}
</style>
</head>

<body>

<header>
    <div class="title">SoulLink Tracker</div>

    <!-- Backup Menü -->
    <div class="menu">
        <button class="menu-btn">Backup</button>
        <div class="menu-content">
            <button class="btn secondary" onclick="downloadData()">Download</button>
            <input type="file" onchange="uploadData(event)">
        </div>
    </div>
</header>

<div class="container">

<!-- Eingabe -->
<div class="card">

    <div class="label">Route</div>
    <input id="route">

    <div class="grid">
        <input id="janik" placeholder="Janik">
        <input id="tim" placeholder="Tim">
        <input id="nils" placeholder="Nils">
        <input id="niki" placeholder="Niki">
    </div>

    <button class="btn primary" onclick="send()">Speichern</button>
    <button class="btn secondary" onclick="openModal()">Run löschen</button>

</div>

<!-- Suche -->
<div class="card">
    <input id="search" placeholder="Suchen..." oninput="loadData()">
</div>

<!-- Tabelle -->
<div class="card">
    <table>
        <thead>
            <tr>
                <th>Route</th>
                <th>Janik</th>
                <th>Tim</th>
                <th>Nils</th>
                <th>Niki</th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
    </table>
</div>

</div>

<!-- Modal -->
<div id="modal" class="modal">
    <div class="modal-content">
        <p>"gugugaga" eingeben</p>
        <input id="confirmText">
        <button class="btn primary" onclick="confirmReset()">Bestätigen</button>
        <button class="btn secondary" onclick="closeModal()">Abbrechen</button>
    </div>
</div>

<script>
// SAVE + RESET INPUTS
function send() {
    const route = document.getElementById("route").value;

    const players = [
        { player: "Janik", pokemonName: document.getElementById("janik").value },
        { player: "Tim", pokemonName: document.getElementById("tim").value },
        { player: "Nils", pokemonName: document.getElementById("nils").value },
        { player: "Niki", pokemonName: document.getElementById("niki").value }
    ];

    players.forEach(p => {
        fetch("/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                location: route,
                player: p.player,
                pokemonName: p.pokemonName
            })
        });
    });

    // 👉 INPUTS LEEREN
    document.getElementById("route").value = "";
    document.getElementById("janik").value = "";
    document.getElementById("tim").value = "";
    document.getElementById("nils").value = "";
    document.getElementById("niki").value = "";

    setTimeout(loadData, 200);
}

// LOAD + SEARCH
async function loadData() {
    const res = await fetch("/data");
    const data = await res.json();

    const search = document.getElementById("search").value.toLowerCase();

    const grouped = {};

    data.forEach(e => {
        if (!grouped[e.location]) {
            grouped[e.location] = { Janik: "", Tim: "", Nils: "", Niki: "" };
        }
        grouped[e.location][e.player] = e.pokemonName;
    });

    const table = document.getElementById("tableBody");
    table.innerHTML = "";

    Object.keys(grouped)
    .filter(route =>
        route.toLowerCase().includes(search) ||
        Object.values(grouped[route]).join("").toLowerCase().includes(search)
    )
    .reverse()
    .forEach(route => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${route}</td>
            <td>${grouped[route].Janik}</td>
            <td>${grouped[route].Tim}</td>
            <td>${grouped[route].Nils}</td>
            <td>${grouped[route].Niki}</td>
        `;
        table.appendChild(row);
    });
}

// MODAL
function openModal() {
    document.getElementById("modal").style.display = "block";
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// RESET
function confirmReset() {
    if (document.getElementById("confirmText").value === "gugugaga") {
        fetch("/reset", { method: "DELETE" }).then(() => {
            closeModal();
            loadData();
        });
    } else {
        alert("Falsch");
    }
}

// BACKUP
function downloadData() {
    fetch("/data")
    .then(res => res.json())
    .then(data => {
        const blob = new Blob([JSON.stringify(data, null, 2)]);
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "backup.json";
        a.click();
    });
}

function uploadData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        const json = JSON.parse(evt.target.result);

        fetch("/import", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json)
        }).then(loadData);
    };

    reader.readAsText(file);
}

loadData();
</script>

</body>
</html>
