// status.js
const workerURL = "https://muddy-pond-8cd0.josiahn.workers.dev/"; // replace with your Worker URL
// Function to fetch and display Pi-Star data
function updateStatus() {
  fetch(workerURL)
    .then(response => response.json())  // parse JSON from Worker
    .then(data => {
      // Display the data in the page
      const format = (v) => v ?? "—"; // fallback if field is missing
      document.getElementById("status").innerHTML = `
        <p><strong>Callsign:</strong> ${format(data.callsign)}</p>
        <p><strong>Mode:</strong> ${format(data.mode)}</p>
        <p><strong>Talkgroup:</strong> ${format(data.talkgroup)}</p>
        <p><strong>Last Heard:</strong> ${format(data.last_heard)}</p>
        <p><strong>RSSI:</strong> ${format(data.rssi)} dBm</p>
      `;

      // Optional: show warning if data is stale (>10 minutes)
      if (data.last_heard) {
        const ageMin = (Date.now() - Date.parse(data.last_heard)) / 60000;
        if (ageMin > 10) {
          document.getElementById("status").innerHTML +=
            "<p style='color:red'>⚠️ Data is stale</p>";
        }
      }
    })
    .catch(error => {
      document.getElementById("status").innerText = "Failed to load data";
      console.error("Error fetching data:", error);
    });
}

// Initial load
updateStatus();

// Optional: auto-refresh every 60 seconds
setInterval(updateStatus, 60000);