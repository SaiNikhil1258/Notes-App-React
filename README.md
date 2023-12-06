# React Notes App

This repository contains a React-based Notes App that utilizes Firebase Firestore for data storage.

## Overview

The `App` component serves as the main entry point for the application. It manages the state of notes, current note selection, and text editing.

## Components

### Sidebar

- **Functionality**: Displays a list of notes, allows note selection, creation, and deletion.
- **Interaction**: Selecting a note in the sidebar updates the editor with the note's content.
- **Props**:
  - `notes`: Array of notes.
  - `currentNote`: Currently selected note.
  - `setCurrentNoteId`: Function to set the current note's ID.
  - `newNote`: Function to create a new note.
  - `deleteNote`: Function to delete a note.

### Editor

- **Functionality**: Provides a text editor for note content editing.
- **Props**:
  - `tempNoteText`: Temporary text content of the note.
  - `setTempNoteText`: Function to set temporary note text.
 
  

---

## Features of Firebase Integration

- **Real-time Database**: Utilizes Firestore's `onSnapshot` to listen for changes in the notes collection, enabling real-time updates across the app.
- **CRUD Operations**: Implements Firestore's CRUD (Create, Read, Update, Delete) operations (`addDoc`, `deleteDoc`, `setDoc`) to manage note creation, deletion, and updating.
- **Scalability and Security**: Firebase Firestore provides scalable cloud-based storage with built-in security features, ensuring data persistence and access control.
## Firebase Integration

- **Firestore Operations**:
  - `onSnapshot`: Listens for changes in the notes collection and updates the state accordingly.
  - `addDoc`: Adds a new note document to the Firestore collection.
  - `deleteDoc`: Deletes a note document from the Firestore collection.
  - `setDoc`: Updates a note document with new content and timestamp.

## State Management

- **State Hooks**:
  - `notes`: Manages the array of notes fetched from Firestore.
  - `currentNoteId`: Tracks the ID of the currently selected note.
  - `tempNoteText`: Holds the temporary text content of the current note.

## Initialization and Rendering

- **Initialization**:
  - Fetches notes from Firestore on component mount.
  - Sets the current note ID on notes change if not already set.

- **Rendering Logic**:
  - Conditionally renders the sidebar and editor components based on the existence of notes.
  - Displays a message and a button to create a new note if no notes exist.

## Note Updating

- **Auto-Save Mechanism**:
  - Periodically checks for changes in the temporary note text and updates the note in Firestore after a 500ms delay.

## Note Creation, Update, and Deletion

- `createNewNote`: Creates a new note document in Firestore with default content.
- `updateNote`: Updates the content of the currently selected note in Firestore.
- `deleteNote`: Deletes the specified note document from Firestore.

---
- **Dependency**: This app requires the `react-split` package for the split view functionality between the sidebar and editor components.

---

This README provides an overview of the Firebase integration for real-time updates, emphasizes the importance of error handling, and briefly describes the code structure for better comprehension and navigation of the project.
