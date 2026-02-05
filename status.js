// status.js
const workerURL = "https://muddy-pond-8cd0.josiahn.workers.dev/"; // replace with your Worker URL
// status.js -

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

      // Show timestamp (callsign field in this JSON) and main info (tg_slot)
      const timestamp = latest.callsign ?? "—";
      const info = latest.tg_slot ?? "—";

      document.getElementById("status").innerHTML = `
        <p><strong>Time:</strong> ${timestamp}</p>
        <p><strong>Info:</strong> ${info}</p>
      `;

      // Stale warning based on generated timestamp
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
setInterval(updateStatus, 60000);