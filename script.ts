// Get the skills section and the toggle button
const skillsSection = document.getElementById('skills') as HTMLElement;
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;

// Add event listener to toggle button
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});