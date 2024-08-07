
#  Music Assignment

 is a music streaming application designed with a sleek user interface for discovering and playing music. The project is built using React, Next.js, and Tailwind CSS.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Installation Instructions](#installation-instructions)
3. [Usage Guide](#usage-guide)
4. [Components Description](#components-description)

## Project Overview

 This app is a feature-rich music streaming application that allows users to explore and play music from various artists. The intuitive UI ensures a smooth user experience, making it easy to navigate through different sections like trending music, playlists, and more.

## Installation Instructions

To set up this repo on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ShashankGupta10/frontend-assignment.git
   cd frontend-assignment` 
2.  **Install dependencies:** Make sure you have [Node.js](https://nodejs.org/) installed, then run:
    `npm install` 
    
3.  **Start the development server:**
    `npm run dev` 
    
4.  **Open your browser:** Navigate to `http://localhost:3000` to see the application in action.
    

## Usage Guide

 This project provides a user-friendly interface to browse and play music. Here’s a quick guide to get you started:

-   **Play Music:** Click on any song from the playlist or trending section to start playing.
-   **Responsive:** The platform is responsive for all screen sizes!


## Components Description

### Player

The `Player` component manages the audio playback functionality. It includes play, pause and displays the current track's information.

### PlaylistSidebar

The `PlaylistSidebar` component displays a sidebar with the user's playlists. It allows users to navigate through different playlists and view their contents.

### Sidebar

The `Sidebar` component provides navigational links and can be collapsed or expanded. It includes links to different sections such as Home, Discover, Collections, and more.

### SongCard

The `SongCard` component displays individual songs in a card format. Each card includes the song's cover image, title, and artist. Clicking on a card will play the associated song.

### Carousel

The `Carousel` component renders a carousel of images with album information and transitions between them automatically. It enhances the UI by showcasing featured albums or songs.

### SearchSection

The `SearchSection` component includes a search bar that allows users to search for songs, artists, or albums.

### SongSection

The `SongSection` component is responsible for rendering different sections of songs, such as trending hits, top albums, and curated playlists. It uses the `SongCard` component to display individual songs.
