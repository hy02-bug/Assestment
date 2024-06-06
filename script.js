document.addEventListener('DOMContentLoaded', function() {
    Papa.parse('Table_Input.csv', {
        download: true,
        header: false,
        complete: function(results) {
            const data = results.data;

            // Display Table 1
            document.getElementById('table1-container').appendChild(createTable(data));

            // Process Data for Table 2
            const table2Data = processTable1Data(data);
            document.getElementById('table2-container').appendChild(createTable(table2Data));
        }
    });
});


function createTable(data) {
    const table = document.createElement('table');
    data.forEach((row, index) => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const cellElement = index === 0 ? document.createElement('th') : document.createElement('td');
            cellElement.textContent = cell;
            tr.appendChild(cellElement);
        });
        table.appendChild(tr);
    });
    return table;
}

function processTable1Data(data) {
    const headers = data[0];
    const table2Data = [['Category', 'Value']];

    //  value of A5 + value of A20
    const num1 = parseFloat(data[5][1]) + parseFloat(data[20][1]);
    
    //  value of A15 / value of A7
    const num2 = parseFloat(data[15][1]) / parseFloat(data[7][1]);
    
    // : value of A13 * value of A12
    const num3 = parseFloat(data[13][1]) * parseFloat(data[12][1]);
    
    // Push to table 2
    table2Data.push(['Alpha', num1]);
    table2Data.push(['Beta', num2]);
    table2Data.push(['Charlie', num3]);

    return table2Data;
}
