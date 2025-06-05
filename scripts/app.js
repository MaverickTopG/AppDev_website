const prevWebsite = document.referrer;

// Select the element with the class 'intro'
let intro = document.querySelector('.intro');

// Select the element with the class 'logo-header'
let logo = document.querySelector('.logo-header');

// Select all elements with the class 'logo'
let logoSpan = document.querySelectorAll('.logo');

if (!prevWebsite.includes("https://mavericktopg.github.io/AppDev_website")) {
    // Add an event listener to the window that triggers when the DOM content is fully loaded
    window.addEventListener('DOMContentLoaded', () => {
        // Delay the execution of the code inside setTimeout by a small interval
        setTimeout(() => {
            // Loop through each logo span element
            logoSpan.forEach((span, idx) => {
                // Add the 'active' class to each span element with a staggered delay
                setTimeout(() => {
                    span.classList.add('active');
                }, (idx + 1) * 400); // Delay increases by 400ms for each span
            });

            // Delay the next set of actions to allow the 'active' class animation to complete
            setTimeout(() => {
                // Loop through each logo span element again
                logoSpan.forEach((span, idx) => {
                    // Remove the 'active' class and add the 'fade' class with a staggered delay
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 50); // Delay increases by 50ms for each span
                })
            }, 2000); // Start this process 2 seconds after the initial animation

            // Delay the next set of actions to allow the 'fade' class animation to complete
            setTimeout(() => {
                intro.style.top = '-100vh';
            }, 2300);
        });
    });
} else {
    window.addEventListener('DOMContentLoaded', () => {
        intro.style.display = 'none';
    });
}
