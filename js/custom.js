let todos = [];

document.getElementById("addBtn").addEventListener("click", function () {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let status = false;
    todos.push({ title, description, status });
    addStatusCard(title, description, status);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
});
function addStatusCard(title, description, status) {
    let cardColor = status ? "bg-success" : "bg-secondary";
    let statusText = status ? "Make Change" : "Complete";
    let statusColor = status ? "btn-secondary" : "btn-success";
    let card = document.createElement("div");
    card.classList.add("card", cardColor, "mb-3");
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = title;
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = description;
    let statusBtn = document.createElement("button");
    statusBtn.classList.add("btn", statusColor);
    statusBtn.textContent = statusText;
    statusBtn.addEventListener("click", function () {
        if (status) {
            status = false;
            card.classList.remove("bg-success");
            card.classList.add("bg-info");
            statusBtn.textContent = "Complete";
            statusBtn.classList.remove("btn-warning");
            statusBtn.classList.add("btn-success");
        } else {
            status = true;
            card.classList.remove("bg-secondary");
            card.classList.add("bg-success");
            statusBtn.textContent = "Make Change";
            statusBtn.classList.remove("btn-success");
            statusBtn.classList.add("btn-warning");
        }
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "float-right");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
        card.style.display = "none";
    });
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(statusBtn);
    cardBody.appendChild(deleteBtn);
    card.appendChild(cardBody);
    document.body.appendChild(card);
}
