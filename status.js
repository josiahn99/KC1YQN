// status.js
const workerURL = "https://muddy-pond-8cd0.josiahn.workers.dev/"; // replace with your Worker URL
// status.js -


// status.js - fetch Pi-Star last heard data
// replace with your Worker URL

function updateStatus() {
  fetch(workerURL)
    .then(res => res.json())
    .then(data => {
      if (!data.entries || data.entries.length === 0) {
        document.getElementById("status").innerText = "No data yet";
        return;
      }

      // Get the most recent entry
      const latest = data.entries[data.entries.length - 1];
      const format = (v) => v ?? "—";

      document.getElementById("status").innerHTML = `
        <p><strong>Time:</strong> ${format(latest.callsign)}</p>
        <p><strong>Mode:</strong> ${format(latest.mode)}</p>
        <p><strong>Talkgroup Info:</strong> ${format(latest.tg_slot)}</p>
      `;

      // Warning if data is stale
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

// initial load
updateStatus();

// refresh every 60 seconds
setInterval(updateStatus, 60000);