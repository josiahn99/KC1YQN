fetch("https://muddy-pond-8cd0.josiahn.workers.dev/")
  .then(response => response.json())
  .then(data => {
    document.getElementById("status").innerHTML = `
      <p><strong>Callsign:</strong> ${data.callsign}</p>
      <p><strong>Mode:</strong> ${data.mode}</p>
      <p><strong>Talkgroup:</strong> ${data.talkgroup}</p>
      <p><strong>Last Heard:</strong> ${data.last_heard}</p>
      <p><strong>RSSI:</strong> ${data.rssi} dBm</p>
    `;
  })
  .catch(error => {
    document.getElementById("status").innerText =
      "Failed to load data";
  });