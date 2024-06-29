// Select all elements with the class '.acordeon .trigger'
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

// Iterate over each found trigger
acordeonTriggers.forEach((trigger) => {

    // Add an event listener for the click event
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')

        // If the acordeon is open, remove the 'open' class to close it - If it's not open, add the 'open' class to open it
        if (isOpen) {
            acordeon.classList.remove('open')
        }
        else {
            acordeon.classList.add('open')
        }
    })
})