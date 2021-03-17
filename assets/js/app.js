// ** variable **
const form = document.querySelector('#form');




// ** function **
eventListener();
function eventListener() {
    form.addEventListener('submit', addToList);
    document.querySelector('#note-list').addEventListener('click', removeFromList);
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}





//  ** Event Listeners **

// function Add notes to list
function addToList(e) {
    const note = document.getElementById('note').value;
    if (note === '') {
        alert("plesa fill fields!!!")
    } else {


        // create node and append to list 
        const li = document.createElement('li');

        // Add id in li
        li.id = 'note-lists';

        // Add delete button in li
        li.innerHTML = `${note} <a class='remove-note'>X</a>`;

        // get parent element
        const noteList = document.getElementById('note-list');

        // append li to notelist
        noteList.appendChild(li);

    }
    addTOLocalStorage(note);
    // reset form field
    form.reset();

    e.preventDefault();
}

function removeFromList(e) {
    if (e.target.classList.contains('remove-note')) {
        e.target.parentElement.remove();
    }

}


function addTOLocalStorage(note) {
    const notes = getItemFromLS();
    notes.push(note);

    localStorage.setItem('notes', JSON.stringify(notes));

}

// function check LS for 
function getItemFromLS() {
    let notes;
    if (localStorage.getItem('notes') === null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('notes'));
    }
    return notes;
}


// function onload page
function localStorageOnLoad() {
    let getLS = getItemFromLS();

    getLS.forEach( note => {

        const li = document.createElement('li');

        // Add id in li
        li.id = 'note-lists';

        // Add delete button in li
        li.innerHTML = `${note} <a class='remove-note'>X</a>`;

        // get parent element
        const noteList = document.getElementById('note-list');

        // append li to notelist
        noteList.appendChild(li);

    });
}