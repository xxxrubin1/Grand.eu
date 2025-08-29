fetch("grants.json")
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector("#grantsTable tbody");
    data.forEach(grant => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${grant.title}</td>
        <td>${grant.program}</td>
        <td>${grant.sector}</td>
        <td>${grant.deadline}</td>
        <td><a href="${grant.link}" target="_blank">View</a></td>
      `;
      tableBody.appendChild(row);
    });
  });
