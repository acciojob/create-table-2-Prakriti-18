function createTable() {
    var rn = prompt("Input number of rows");
    var cn = prompt("Input number of columns");

    // Convert to numbers
    rn = Number(rn);
    cn = Number(cn);

    // Check for non-numeric input
    if (isNaN(rn) || isNaN(cn)) {
        return; // ignore and do nothing
    }

    // Check for zero or negative values
    if (rn <= 0 || cn <= 0) {
        alert("Number of rows and columns must be greater than 0");
        return;
    }

    var table = document.getElementById("myTable");

    // Clear existing table (important for repeated clicks)
    table.innerHTML = "";

    for (var i = 0; i < rn; i++) {
        var row = table.insertRow();

        for (var j = 0; j < cn; j++) {
            var cell = row.insertCell();
            cell.innerText = "Row-" + i + " Column-" + j;
        }
    }
}

