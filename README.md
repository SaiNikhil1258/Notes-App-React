## App Component

### State
- `notes`: Holds an array of notes fetched from Firebase.
- `currentNoteId`: Keeps track of the ID of the currently selected note.
- `tempNoteText`: Stores the temporary text of the current note being edited.

### Fetching Data
- `useEffect` with `onSnapshot`: Listens for changes in the `notesCollection` in Firebase and updates the `notes` state accordingly.

### Functionality
- Sets the `currentNoteId` to the first note's ID when the `notes` array updates.
- Updates `tempNoteText` whenever the `currentNote` changes.

### Functions
- `createNewNote`: Creates a new note in the Firebase collection, sets it as the current note.
- `updateNote`: Updates the text and `updatedAt` timestamp of the current note in Firebase.
- `deleteNote`: Deletes the specified note from Firebase.

### Rendering
- Displays a split view with a Sidebar and an Editor.
- Sidebar contains a list of notes, allowing selection, creation, and deletion of notes.
- Editor displays the content of the currently selected note for editing.

### Conditional Rendering
- Checks if there are any notes; if not, it displays a message prompting the user to create a note.

### Components Used
- `Sidebar`: Manages the list of notes and interactions related to notes.
- `Editor`: Allows editing of the content of the currently selected note.

### Libraries Used
- `React`: Framework for building user interfaces.
- `Firebase`: Interacts with Firebase Firestore for data storage.

## Overall Functionality
The App component handles note creation, deletion, and editing functionalities. It fetches notes from Firebase, displays them in a sidebar, and allows editing in a split-view editor. Updates to notes trigger real-time changes in the application.
