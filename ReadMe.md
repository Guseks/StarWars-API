# StarWars API

Application for managing a collection of star wars characters. App interacts with external API to gather information about characters specified by the user.

## Installation and Setup
Information regarding installation and launching application.

### Requirements
- Windows computer
- Access to a terminal
- Required libraries will be installed

### Installations and start app
To install the required dependencies for each section of the app start by navigating to the root folder of the app in your terminal.  
Run the following command in your terminal.

```bash
# Install project dependencies
npm install

```
After installation is complete. Start the application by running the following command in the root folder of the project in your terminal.

```bash
# Start the application. Launches both the frontend and the backend.
npm start
```

## Backend - API Endpoints

### Get All Characters

- **Endpoint:** `/characters/`
- **Method:** GET
- **Description:** Retrieves all characters from the collection. 
-  **Response:**
   -  Returns a JSON array of characters in collection if the collection is not empty. Also sends status code of 200. 
   -  Returns status 200, with a message "No characters in collection" if the collection is empty.


### Add Character
- **Endpoint:** `/characters/add`
- **Method:** PUT
- **Description:** Adds a character to the collection.
- **Request Body:** JSON with character's name.
- **Response:**
  - 201 Created: Returns a message and the added character's details if successful.
  - 400 Bad Request: Returns an error message if there are issues, including a message if multiple characters are found.

### Delete Character

- **Endpoint:** `/characters/delete/:name`
- **Method:** DELETE
- **Description:** Deletes a character from the collection by name.
- **Response:**
  - 200 OK: Returns a message if the character was successfully removed.
  - 400 Bad Request: Returns an error message if there are issues.


### Swap Characters

- **Endpoint:** `/characters/swap`
- **Method:** POST
- **Description:** Swaps the positions of characters in the collection.
- **Request Body:** JSON array with name of characters to swap.
- **Response:**
  - 200 OK: Returns a message if the characters were swapped successfully.
  - 400 Bad Request: Returns an error message if there are issues.


## Frontend

### Usage examples

## Project Structure

## Technologies Used

### Languages
- JavaScript

### Libraries and Frameworks
- React
- Express

