// status.js
const workerURL = "https://muddy-pond-8cd0.josiahn.workers.dev/"; // replace with your Worker URL
// status.js -

function updateStatus() {
  fetch(workerURL)
    .then(res => res.json())
    .then(data => {
      // check that entries exist
      if (!data.entries || data.entries.length === 0) {
        document.getElementById("status").innerText = "No data yet";
        return;
      }

      // take the latest entry
      const latest = data.entries[data.entries.length - 1];

      // Use only tg_slot field
      const info = latest.tg_slot ?? "No info";

      document.getElementById("status").innerHTML = `
        <p><strong>Info:</strong> ${info}</p>
        <p><em>Generated:</em> ${data.generated ?? "Unknown"}</p>
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

// initial load
updateStatus();

// refresh every 60s
setInterval(updateStatus, 60000);