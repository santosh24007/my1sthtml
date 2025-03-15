document.getElementById('startButton').addEventListener('click', function() {
    // Get the graphics container and make it visible
    const graphicsContainer = document.getElementById('graphicsContainer');
    graphicsContainer.style.visibility = 'visible';

    // Create a new circle element
    const circle = document.createElement('div');
    circle.classList.add('circle');

    // Append the circle to the graphics container
    graphicsContainer.appendChild(circle);

    // Remove the circle after the animation completes (1 second)
    setTimeout(() => {
        graphicsContainer.removeChild(circle);
    }, 1000);
});
