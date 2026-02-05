// status.js
fetch("muddy-pond-8cd0.josiahn.workers.dev")  // replace with your real Worker URL
  .then(response => response.json())           // parse JSON from Worker
  .then(data => {
    // Insert the data into the page
    document.getElementById("status").innerHTML = `
      <p><strong>Callsign:</strong> ${data.callsign}</p>
      <p><strong>Mode:</strong> ${data.mode}</p>
      <p><strong>Talkgroup:</strong> ${data.talkgroup}</p>
      <p><strong>Last Heard:</strong> ${data.last_heard}</p>
      <p><strong>RSSI:</strong> ${data.rssi} dBm</p>
    `;
  })
  .catch(error => {
    // Show a user-friendly error
    document.getElementById("status").innerText = "Failed to load data";
    console.error("Error fetching data:", error);
  });