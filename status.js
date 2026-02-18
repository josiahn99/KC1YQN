document.addEventListener("DOMContentLoaded", function () {

  const tableBody = document.getElementById('tableBody');

  if (!tableBody) {
    console.error("Error: tableBody element not found. Make sure your table has <tbody id='tableBody'>");
    return;
  }

  let previousData = [];

  function loadLog() {
    console.log("Loading JSON...");

    fetch('/status.json')
      .then(response => {
        console.log("Response status:", response.status);
        if (!response.ok) throw new Error("HTTP error " + response.status);
        return response.json();
      })
      .then(data => {
        console.log("Data received:", data);

        tableBody.innerHTML = ""; // clear previous rows

        // Show last 50 entries, newest first
        const recentEntries = data.slice(-50).reverse();

        recentEntries.forEach(entry => {
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

          // Highlight new rows
          const isNew = !previousData.some(
            e => e.time === entry.time && e.callsign === entry.callsign && e.tg_slot === entry.tg_slot
          );

          if (isNew) {
            tr.style.backgroundColor = "#d1ffd1"; // light green
            setTimeout(() => { tr.style.transition = "background-color 1s"; tr.style.backgroundColor = ""; }, 3000);
          }

          tableBody.appendChild(tr);
        });

        // Update previousData
        previousData = recentEntries;
      })
      .catch(error => console.error('Error loading JSON:', error));
  }

  // Initial load
  loadLog();

  // Auto-refresh every 30 seconds
  setInterval(loadLog, 30000);

});
