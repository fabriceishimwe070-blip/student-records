const log = document.getElementById("log");

let student = JSON.parse(localStorage.getItem("stadent")) || [];

function add() {
    log.style.display = "block";
    document.getElementById("he").style.filter = "blur(3px)";
}

function cancel() {
    log.style.display = "none";
    document.getElementById("up").style.display = "block";
    document.getElementById("he").style.filter = "blur(0)";
}

function save() {
    const name = document.getElementById("name").value;
    const classer = document.getElementById("classe").value;
    const combination = document.getElementById("combination").value;

    const table = document.getElementById("student");

    document.getElementById("he").style.filter = "blur(0)";
    log.style.display = "none";
    const students = {
        names: name,
        clas: classer,
        combo: combination
    };

    if (students.names && students.clas && students.combo) {
        student.push(students);

        
        localStorage.setItem("stadent", JSON.stringify(student));
    }

    render();

    document.getElementById("name").value = "";
    document.getElementById("classe").value = "";
    document.getElementById("combination").value = "";
}

function render() {
 document.getElementById("table").style.cssText=`
     border: 3px solid transparent;
    background: linear-gradient(white,white)padding-box,
    linear-gradient(90deg,violet,red,blue)border-box;
    animation: move 2s linear infinite;
    `

    const table = document.getElementById("student");

   
    table.innerHTML = "";

   
    student.forEach(item => {

        const row = table.insertRow();

        row.innerHTML = `
            <td>${item.names}</td>
            <td>${item.clas}</td>
            <td>${item.combo}</td>
        `;
    });
}


render();