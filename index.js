const log = document.getElementById("log");

function add() {
    const log = document.getElementById("log"); 
    
        log.style.display = "block";
    

   
    document.getElementById("he").style.filter =" blur(3px)"
}

function cancel() {
    log.style.display = "none";
    document.getElementById("up").style.display="block"
      document.getElementById("he").style.filter =" blur(0)"
}

function save() {
    const name = document.getElementById("name").value;
    const classer = document.getElementById("classe").value;
    const combination = document.getElementById("combination").value;
    const table = document.getElementById("student");
    const row = document.createElement("tr");
  document.getElementById("he").style.filter =" blur(0)"
    row.innerHTML = `
        <td>${name}</td>
        <td>${classer}</td>
        <td>${combination}</td>
    `;
  log.style.display = "none";
    table.appendChild(row);
    
     document.getElementById("name").value = "";
    document.getElementById("classe").value = "";
    document.getElementById("combination").value = "";
    document.getElementById("table").style.cssText=`
    border: 4px solid transparent;
    background: linear-gradient(white,white)padding-box,
    linear-gradient(90deg,red,green,pink)border-box;
    animation: move 2s linear infinite;
    `
    document.getElementById("bad").style.cssText=`
      border-radius: 10px 10px 0 0;
    `
}

