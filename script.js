function showContent(id) {
    const selectedContainer = document.getElementById(id);

    // If the container is already visible, hide it
    if (selectedContainer.style.display === 'block') {
        selectedContainer.style.display = 'none';
    } else {
        // Hide all other containers
        const containers = document.querySelectorAll('.content-container');
        containers.forEach(container => container.style.display = 'none');

        // Show the selected one
        selectedContainer.style.display = 'block';
    }
}

const imgBox = document.querySelector('.image-container01');
imgBox.classList.toggle('hidden');


