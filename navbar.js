const sw = -1;
var s = -1;

function dropdown() {
	if (s == -1) {
		document.getElementById("arrow").innerHTML = "v";
	} else if (s == 1) {
		document.getElementById("arrow").innerHTML = ">";
	}
	s *= sw;
}
