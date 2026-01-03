document.addEventListener("DOMContentLoaded", () => {
      const compareBtn = document.getElementById("compareBtn");
      const checkboxes = document.querySelectorAll(".compare-check");
      const modal = document.getElementById("comparisonModal");
      const closeBtn = document.querySelector(".close");
      const tableContainer = document.getElementById("comparisonTableContainer");

      compareBtn.addEventListener("click", () => {
        const selected = [...checkboxes].filter(ch => ch.checked);

        if (selected.length < 2) {
          alert("Please select at least 2 crystals to compare.");
          return;
        }
        if (selected.length > 3) {
          alert("You can only compare up to 3 crystals.");
          return;
        }

        let table = `<table>
        <tr>
          <th>Feature</th>
          ${selected.map(s => `<th>${s.dataset.name}<br><img src="${s.dataset.img}" width="120" style="border-radius:8px;margin-top:10px;"></th>`).join('')}
        </tr>
        <tr><td><strong>Color</strong></td>${selected.map(s => `<td>${s.dataset.color}</td>`).join('')}</tr>
        <tr><td><strong>Hardness (Mohs)</strong></td>${selected.map(s => `<td>${s.dataset.hardness}</td>`).join('')}</tr>
        <tr><td><strong>Healing Property</strong></td>${selected.map(s => `<td>${s.dataset.healing}</td>`).join('')}</tr>
        <tr><td><strong>Price Range</strong></td>${selected.map(s => `<td>${s.dataset.price}</td>`).join('')}</tr>
        <tr><td><strong>Origin</strong></td>${selected.map(s => `<td>${s.dataset.origin}</td>`).join('')}</tr>
      </table>`;

        tableContainer.innerHTML = table;
        modal.style.display = "block";
      });

      closeBtn.onclick = () => modal.style.display = "none";
      window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
      };
    });