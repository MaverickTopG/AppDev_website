// Select the elements with the classes 'next' and 'prev'
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Add a click event listener to the 'next' button
next.addEventListener('click', function () {
    // Select all elements with the class 'item'
    let items = document.querySelectorAll('.item');
    // Move the first item to the end of the '.slide' container
    document.querySelector('.slide').appendChild(items[0]);
});

// Add a click event listener to the 'prev' button
prev.addEventListener('click', function () {
    // Select all elements with the class 'item'
    let items = document.querySelectorAll('.item');
    // Move the last item to the beginning of the '.slide' container
    document.querySelector('.slide').prepend(items[items.length - 1]); // items.length = 6
});
