
// css handler TPE

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

// image handler

function openModal(elm) {
	document.getElementById('zoom').style.display = "block";
	document.getElementById('image').src = elm.src;
}

function closeModal() {
	document.getElementById('zoom').style.display = "none";
}


/*
document.getElementById('zoomed');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('zoomer');
var modalImg = document.getElementById('image');

$("img.photo").click(function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  });


document.getElementsByClassName("close")[0].onclick = function() { 
    modal.style.display = "none";
} */