/*
	🌓 DARK/LIGHT THEME TOGGLE
*/
const theme_icon = document.querySelector(".theme_icon");
function setTheme(theme) {
	localStorage.setItem("theme", theme);
	if (theme === "light") {
		theme_icon.innerHTML = "dark_mode";
		document.body.classList.remove("dark-theme");
	}
	else {
		theme_icon.innerHTML = "light_mode";
		
		document.body.classList.add("dark-theme");
	}
}

function toggleTheme() {
	theme = localStorage.getItem("theme");
	if (theme === "light") {
		setTheme("dark");
	}
	else {
		setTheme("light");
	}
}

function loadTheme() {
	theme = localStorage.getItem("theme");
	if (theme === "light") {
		setTheme("light");
	}
	else if (theme === "dark") {
		setTheme("dark");
	}
	else {
		setTheme("light");
	}
}
