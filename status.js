document.addEventListener("DOMContentLoaded", function () {

  fetch('data/radiolog.json')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('tableBody');
      tableBody.innerHTML = ""; // clear previous rows

      // Show last 50 entries, newest first
      data.slice(-50).reverse().forEach(entry => {
        const tr = document.createElement('tr');

        // Use explicit fields from JSON
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

    // Initial load
  loadLog();

  // Auto-refresh every 30 seconds
  setInterval(loadLog, 30000);
  
});
