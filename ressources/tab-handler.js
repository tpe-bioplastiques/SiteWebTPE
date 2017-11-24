
// Tab handler

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("element");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// css handler

function swapStyleSheet() {
	s = document.getElementById('sheet2').getAttribute('href');
	if (s == 'ressources/custom-w3.css') {
		document.getElementById('sheet1').setAttribute('href', '');
		document.getElementById('sheet2').setAttribute('href', 'ressources/printable.css');
		window.alert("Cliquez a nouveau sur le bouton pour revenir a l'affichage normal");
	} else {
		location.reload();
	};
}

// dropdown handler

function openDrop(elm) {
	var dropdown = elm.parentElement.children[1]
    dropdown.classList.toggle("w3-show");
}

window.onclick = function(event) {
	if (!event.target.matches('.drop')) {
		var dropdowns = document.getElementsByClassName("w3-dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('w3-show')) {
				openDropdown.classList.remove('w3-show');
			}
		}
	}
} 
