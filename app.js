function saveNote() {
  const note = document.getElementById("noteInput").value;
  if (!note.trim()) return;

  // Encode the note (base64, not secure encryption)
  const encrypted = btoa(note);
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(encrypted);
  localStorage.setItem("notes", JSON.stringify(notes));
  document.getElementById("noteInput").value = "";
  displayNotes();
}

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const noteList = document.getElementById("noteList");
  noteList.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = note;
    noteList.appendChild(li);
  });
}

// Load notes when the page loads
window.onload = displayNotes;
