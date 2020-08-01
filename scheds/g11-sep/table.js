let rows;
let header;

async function getAndDrawTableData(csv) {
	const response = await fetch(csv);
	const data = await response.text();

	rows = data.split("\n");
	header = rows[0].split(",");
	for (let i = 0; i < header.length; i++) {
		header[i] = header[i].replace('" ', "");
		header[i] = header[i].replace('"', "");
	}

	// ADD TABLE HEADERS
	var tr = document.createElement("tr");
	var th = new Array(header.length);
	for (let i = 0; i < header.length; i++) {
		th[i] = document.createElement("th");
		th[i].appendChild(document.createTextNode(header[i]));
		tr.appendChild(th[i]);
	}
	document.getElementById("table").appendChild(tr);

	tr = document.createElement("tr");
	var td = new Array(header.length);
	rows.slice(1).forEach((row) => {
		columns = row.split(",");
		for (let i = 0; i < columns.length; i++) {
			columns[i] = columns[i].replace('" ', "");
			columns[i] = columns[i].replace('"', "");
		}
		// ADD DATA INTO COLUMNS
		tr = document.createElement("tr");
		for (let i = 0; i < columns.length; i++) {
			td[i] = document.createElement("td");
			td[i].appendChild(document.createTextNode(columns[i]));
			tr.appendChild(td[i]);
		}
		document.getElementById("table").appendChild(tr);
	});
}

