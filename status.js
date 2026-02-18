document.addEventListener("DOMContentLoaded", function () {

  fetch('status.json')
    .then(response => response.json())
    .then(data => {
      if (!data.length) return;

      const headerRow = document.getElementById('tableHeader');
      const tableBody = document.getElementById('tableBody');

      // Headers
      Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
      });

      // Rows
      data.forEach(entry => {
        const tr = document.createElement('tr');

        Object.values(entry).forEach(value => {
          const td = document.createElement('td');
          td.textContent = value;
          tr.appendChild(td);
        });

        tableBody.appendChild(tr);
      });
    })
    .catch(error => console.error('Error loading JSON:', error));

});
