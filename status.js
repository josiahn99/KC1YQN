document.addEventListener("DOMContentLoaded", function () {

  fetch('/status.json')
    .then(response => response.json())
    .then(data => {

      const tableBody = document.getElementById('tableBody');

      // Clear table first (important if you later add refresh)
      tableBody.innerHTML = "";

      // Show newest entries first
      data.reverse().forEach(entry => {

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

});
