let rows;
let header;

async function getAndDrawTableData() {
	const response = await fetch("g11-sum.csv");
	const data = await response.text();

	rows = data.split("\n");
	header = rows[0].split(",");
	for (let i = 0; i < header.length; i++) {
		header[i] = header[i].replace('" ', "");
		header[i] = header[i].replace('"', "");
	}

	document.writeln("<tr>");
	for (let i = 0; i < header.length; i++) {
		document.writeln("<th>" + header[i] + "</th>");
	}
	document.writeln("</tr>");	

	rows.slice(1).forEach((row) => {
		columns = row.split(",");
		for (let i = 0; i < columns.length; i++) {
			columns[i] = columns[i].replace('" ', "");
			columns[i] = columns[i].replace('"', "");
		}
	});
}
