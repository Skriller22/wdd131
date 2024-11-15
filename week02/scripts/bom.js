const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Fill in the blank

// Add an event listener to the button for click events
button.addEventListener('click', () => {
    const chapter = input.value.trim(); // Get the input value and trim any whitespace
    input.value = ''; // Clear the input field

    if (chapter !== '') { // Check if the input is not empty
        const listItem = document.createElement('li'); // Create a new list item
        const listText = document.createElement('span'); // Create a span for the text
        const deleteButton = document.createElement('button'); // Create a delete button

        listText.textContent = chapter; // Set the text content of the span
        deleteButton.textContent = '❌'; // Set the text content of the delete button

        listItem.appendChild(listText); // Append the text span to the list item
        listItem.appendChild(deleteButton); // Append the delete button to the list item
        list.appendChild(listItem); // Append the list item to the list

        // Add an event listener to the delete button for click events
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem); // Remove the list item from the list
        });
    } else {
        alert('Please enter a chapter'); // Alert the user if the input is empty
    }

    input.focus(); // Focus the input field
});