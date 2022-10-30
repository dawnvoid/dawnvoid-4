let root = document.querySelector("html");
console.log(localStorage)

// Check if dark theme is already enabled:
let is_dark = localStorage.getItem("is_dark");
if (is_dark === "true") {
    toggle_theme();
}

// Make the theme toggle button work:
let theme_toggles = document.querySelectorAll(".theme-toggle");
console.log(theme_toggles);
for (let idx = 0; idx < theme_toggles.length; idx++) {
    let theme_toggle = theme_toggles[idx];
    console.log(theme_toggle)
    theme_toggle.addEventListener("click", toggle_theme);
}

// Switch themes and update local storage:
function toggle_theme() {
    if (root.classList.contains("dark-theme")) {
        // Turn off dark theme:
        root.classList.remove("dark-theme");
        localStorage.setItem("is_dark", "false");
    } else {
        // Turn on dark theme:
        root.classList.add("dark-theme");
        localStorage.setItem("is_dark", "true");
    }
}