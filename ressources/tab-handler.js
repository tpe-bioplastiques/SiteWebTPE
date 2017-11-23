
// Tab handler

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("element");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// VideoTab handler

var current = "null"

function launchvid (elm, tab, vidname) {
	var place = document.getElementById(tab).children[0]; // the video frame
	
	var imgs = document.getElementsByClassName("ctab"); // remove "imagevalid" class from tabs
	for (i = 0; i < imgs.length; i++) {
		imgs[i].classList.remove("imagevalid");
	}

	if (vidname == current) {
		document.getElementById(tab).style.display = "none"; // colse if clicked tab = opened tab
		place.src = "";
		current = "";
	} else {
		document.getElementById(tab).style.display = "block"; // else, show and set the correct source
		place.src = "https://www.youtube.com/embed/" + vidname + "?autoplay=1";
		current = vidname;
		elm.classList.add("imagevalid");
	}
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