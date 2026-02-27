const log = document.getElementById("log");

function add() {
    log.style.visibility = "visible";
}

function cancel() {
    log.style.display = "none";
    clearInputs();
}

function save() {
    const name = document.getElementById("name").value;
    const classer = document.getElementById("classe").value;
    const combination = document.getElementById("combination").value;
    const table = document.getElementById("student");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${classer}</td>
        <td>${combination}</td>
    `;

    table.appendChild(row);
    
     document.getElementById("name").value = "";
    document.getElementById("classe").value = "";
    document.getElementById("combination").value = "";

}

