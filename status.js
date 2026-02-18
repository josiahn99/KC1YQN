document.addEventListener("DOMContentLoaded", function () {

  const tableBody = document.getElementById('tableBody');

  if (!tableBody) {
    console.error("Error: tableBody element not found. Make sure your table has <tbody id='tableBody'>");
    return;
  }

  function loadLog() {
    console.log("Loading JSON...");

    fetch('status.json')  // root-relative path
      .then(response => {
        console.log("Response status:", response.status);
        if (!response.ok) throw new Error("HTTP error " + response.status);
        return response.json();
      })
      .then(data => {
        console.log("Data received:", data);

        tableBody.innerHTML = ""; // clear previous rows

        // Show last 50 entries, newest first
        data.slice(-50).reverse().forEach(entry => {
          const tr = document.createElement('tr');

          const timeCell = document.createElement('td');
          timeCell.textContent = entry.time;

          const callsignCell = document.createElement('td');
          callsignCell.textContent = entry.callsign;

          const tgCell = document.createElement('td');
          tgCell.textContent = entry.tg_slot;

          tr.appendChild(timeCell);
          tr.appendChild(callsignCell);
          tr.appendChild(tgCell);

          tableBody.appendChild(tr);
        });
      })
      .catch(error => console.error('Error loading JSON:', error));
  }

  // Initial load
  loadLog();

  // Auto-refresh every 30 seconds
  setInterval(loadLog, 30000);

});
