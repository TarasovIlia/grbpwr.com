const infoList = document.getElementById("side_bar_info");
const infoBtn = document.getElementById("desktop_inf");


infoBtn.addEventListener("click", function(event) {
	infoOpen();
});
function infoOpen() {
	infoList.classList.add("active_info");
	}
