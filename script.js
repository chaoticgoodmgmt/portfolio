window.onload = function () {
    // Scroll the below-line-container to the top when the page loads
    document.querySelector('.below-line-container').scrollTop = 0;

    // Time Update Function
    function updateTime() {
        const timeDisplay = document.getElementById('time-display');
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeDisplay.textContent = `${hours}:${minutes}`;
    }

    // Update the time every minute
    updateTime();
    setInterval(updateTime, 60000);

    // Number Count-Up Function
    const countupElement = document.getElementById('countup');
    let count = 0;
    const target = 100000000;
    const speed = target / 200; // Adjust this value to change the speed

    function updateCount() {
        count += speed;
        if (count < target) {
            countupElement.textContent = Math.floor(count).toLocaleString();
            requestAnimationFrame(updateCount);
        } else {
            countupElement.textContent = target.toLocaleString();
        }
    }

    // Fade in the number and start the count-up animation
    countupElement.style.opacity = 0;
    countupElement.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
        countupElement.style.opacity = 1;
        updateCount();
    }, 100); // Start the count-up after a short delay

    // Tab switching functionality and image change
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const tab1Image = tab1.querySelector('img');
    const tab2Image = tab2.querySelector('img');

    // Initialize the images to be the selected ones
    tab1Image.src = 'images/icons/grid.png';
    tab2Image.src = 'images/icons/campaigns-unselected.png';

    // Add event listeners for the tabs
    tab1.addEventListener('click', function() {
        tab1.classList.add('active');
        tab2.classList.remove('active');

        // Change images when tab1 is selected
        tab1Image.src = 'images/icons/grid.png';
        tab2Image.src = 'images/icons/campaigns-unselected.png';

        // Show the first below-line-container
        document.getElementById('below-line-container1').classList.add('active');
        document.getElementById('below-line-container2').classList.remove('active');
    });

    tab2.addEventListener('click', function() {
        tab2.classList.add('active');
        tab1.classList.remove('active');

        // Change images when tab2 is selected
        tab1Image.src = 'images/icons/gridunselected.png';
        tab2Image.src = 'images/icons/campaigns-selected.png';

        // Show the second below-line-container
        document.getElementById('below-line-container2').classList.add('active');
        document.getElementById('below-line-container1').classList.remove('active');
    });
};
