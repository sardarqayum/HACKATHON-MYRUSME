// Get the skills section and the toggle button
var skillsSection = document.getElementById('skills');
var toggleButton = document.getElementById('toggle-skills');
// Add event listener to toggle button
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
