const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Fill in the blank

// Add an event listener to the button for click events
button.addEventListener('click', () => {
    const chapter = input.value.trim(); // Get the input value and trim any whitespace
    input.value = ''; // Clear the input field

    if (chapter !== '') { // Check if the input is not empty
        const chapterObj = { // Create a chapter object
            chapter: chapter
        };

        displayChapter(chapterObj); // Call the displayChapter function

        let chaptersArray = getChapterList() || []; // Get the chapter list or create a new array
        chaptersArray.push(chapterObj); // Add the chapter object to the array
        localStorage.setItem('chapters', JSON.stringify(chaptersArray)); // Save the array to local storage
    } else {
        alert('Please enter a chapter'); // Alert the user if the input is empty
    }

    input.focus(); // Focus the input field
});

// Create a function to get the chapter list from local storage
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

// Get the chapter list from local storage
let chaptersArray = getChapterList() || [];

// Loop through the chapter list and display each chapter
chaptersArray.forEach(chapter => {
    displayChapter(chapter);
});

// Create a function to display a chapter
function displayChapter(chapter) {
    const li = document.createElement('li');
    const text = document.createTextNode(chapter.chapter);
    li.appendChild(text);
    list.appendChild(li);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.id = 'delete';
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);

        let chaptersArray = getChapterList();
        chaptersArray = chaptersArray.filter(item => item.chapter !== chapter.chapter);
        localStorage.setItem('chapters', JSON.stringify(chaptersArray));
    });
}