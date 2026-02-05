// status.js
const workerURL = "https://muddy-pond-8cd0.josiahn.workers.dev/"; // replace with your Worker URL
// status.js - fetch Pi-Star last heard data

function updateStatus() {
  fetch(workerURL)
    .then(res => res.json())
    .then(data => {
      if (!data.entries || data.entries.length === 0) {
        document.getElementById("status").innerText = "No data yet";
        return;
      }

      // Latest entry
      const latest = data.entries[data.entries.length - 1];

      document.getElementById("status").innerHTML = `
        <p><strong>Time:</strong> ${latest.callsign ?? "—"}</p>
        <p><strong>Date/Mode:</strong> ${latest.mode ?? "—"}</p>
        <p><strong>Info:</strong> ${latest.tg_slot ?? "—"}</p>
      `;

      // Stale warning
      if (data.generated) {
        const ageMin = (Date.now() - Date.parse(data.generated)) / 60000;
        if (ageMin > 10) {
          document.getElementById("status").innerHTML +=
            "<p style='color:red'>⚠️ Data is stale</p>";
        }
      }
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