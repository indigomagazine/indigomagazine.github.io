/* To change to Light/Dark mode */
function changeColor() {
    const element = document.body;
    element.classList.toggle("light-mode"); /* Toggle the "light-mode" class on the body element */

    const changeModeBtn = document.querySelector(".change-mode"); /* Select the button that changes the mode */
    if (element.classList.contains("light-mode")) { /* Checks if the body currently has the "dark-mode" class */
        changeModeBtn.textContent = "Dark"; /* If clicked, change to "Dark" */
    } else {
        changeModeBtn.textContent = "Light"; /* If clicked, change to "Light" */
    }
}