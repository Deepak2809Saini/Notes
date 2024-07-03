const btnCreat = document.querySelector(".btn-creat");
const notesField = document.querySelector(".notes-field");

function showNotes() {
    notesField.innerHTML = localStorage.getItem("notes") || '';
    const notes = notesField.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.setAttribute("contenteditable", "true");
        note.querySelector("img").addEventListener("click", function() {
            note.remove();
            updateStorage();
        });
        note.addEventListener("input", updateStorage);
    });
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesField.innerHTML);
}

btnCreat.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    inputBox.appendChild(img);

    img.addEventListener("click", function() {
        inputBox.remove();
        updateStorage();
    });

    inputBox.addEventListener("input", updateStorage);
    notesField.appendChild(inputBox);

    updateStorage();
});

notesField.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

notesField.addEventListener("input", (e) => {
    if (e.target.tagName === "P") {
        updateStorage();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});


