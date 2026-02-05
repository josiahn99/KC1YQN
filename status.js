// status.js
const workerURL = "https://muddy-pond-8cd0.josiahn.workers.dev/"; // replace with your Worker URL
// status.js -
function updateStatus() {
  fetch(workerURL)
    .then(res => res.json())
    .then(data => {
      // Container div
      const container = document.getElementById("status");
      if (!container) return;

      container.innerHTML = ""; // clear previous

      // Show the generated timestamp
      const gen = data.generated ?? "Unknown";
      const genElem = document.createElement("p");
      genElem.innerHTML = `<strong>Generated:</strong> ${gen}`;
      container.appendChild(genElem);

      // Check entries
      if (!data.entries || data.entries.length === 0) {
        const p = document.createElement("p");
        p.innerText = "No entries";
        container.appendChild(p);
        return;
      }

      // Create table
      const table = document.createElement("table");
      table.style.borderCollapse = "collapse";
      table.style.width = "100%";

      // Header row
      const header = document.createElement("tr");
      ["Time", "Mode", "Callsign", "Info"].forEach(text => {
        const th = document.createElement("th");
        th.innerText = text;
        th.style.border = "1px solid #333";
        th.style.padding = "4px";
        header.appendChild(th);
      });
      table.appendChild(header);

      // Rows for each entry
      data.entries.forEach(entry => {
        const tr = document.createElement("tr");
        [entry.time, entry.mode, entry.callsign, entry.tg_slot].forEach(val => {
          const td = document.createElement("td");
          td.innerText = val ?? "";
          td.style.border = "1px solid #333";
          td.style.padding = "4px";
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });

      container.appendChild(table);
    })
    .catch(err => {
      document.getElementById("status").innerText = "Failed to load data";
      console.error(err);
    });
}

// Initial load
updateStatus();

// Refresh every 60 seconds
setInterval(updateStatus, 60000);