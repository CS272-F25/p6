const styles = [
  "Fedora",
  "Baseball_cap",
  "Beanie"
];

const container = document.getElementById("styleList");

styles.forEach(style => {
  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${style}`)
    .then(response => response.json())
    .then(data => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      let description = data.extract || "";

      if (description.toLowerCase().includes("may refer to")) {
        description = `A beanie is a close-fitting knitted hat, commonly worn for warmth and casual style`;
      }

      
      description = description.split(". ").slice(0, 2).join(". ") + ".";

      col.innerHTML = `
        <figure class="p-3 bg-white rounded shadow-sm h-100">
          <h3 class="h5">${data.title}</h3>
          <p>${description}</p>
        </figure>
      `;

      container.appendChild(col);
    })
    .catch(() => {
      const error = document.createElement("p");
      error.textContent = "Unable to load hat style information.";
      container.appendChild(error);
    });
});