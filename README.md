# Todo List Project in React and Tailwind CSS

This project is a todo list application built with **React** that implements a **typing effect** on the text. It uses **React**, **Tailwind CSS**, and **Vite** for fast development and a modern, stylish user interface.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework to style the user interface efficiently.
- **Vite**: Build tool for modern web development that provides a fast development environment.

## Features

- **Interactive Todo List**: Allows users to add and delete tasks.
- **Typing Effect**: Each task has a typing effect with a cursor animation that moves while typing and deleting text.
- **React State**: Uses the `useState` hook to manage the task list and the typing animation.

## Installation

Follow these steps to clone and run the project:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repository.git

   ```

1. **Install dependencies:** Navigate to the project folder and run the following command to install dependencies:

   ```bash
   npm install
   ```

1. **Run the development server:**
   Once the dependencies are installed, start the development server with:

   ```bash
   npm run dev

   ```

1. **Access the app:**
   Open your browser and go to http://localhost:3000 to see the app in action.

## Usage

- **Add a task**: Type the name of the task in the input field and click the button to add it.

- **Delete a task**: Click the trash can icon next to a task to delete it.

## How It Works

- **React** is used to manage the state of the tasks, allowing for updates when tasks are added or deleted.

- **Tailwind CSS** is used to style the components, ensuring the UI is clean and responsive.

- The **typing effect** is implemented with a custom component that dynamically updates the text being "typed" or "deleted".

## Implementation Steps

1.  **Create a new project with Vite**:

    - First, create a new project using Vite with the following command:

    `npm create vite@latest`

    - Then, choose **React** as the framework.

2.  **Install dependencies**:

    - Run `npm install` to install the necessary dependencies. Also, install Tailwind CSS:

    `npm install -D tailwindcss`

    - Then, add the Tailwind directives in `src/index.css`:

    `@import "tailwindcss";`

4.  **Create the typing effect**:

    - Create a component that uses `useState` to manage the text and simulate the typing and deleting effects.

5.  **Add task logic**:

    - Set up a state in `App.js` to manage the todo list and functions for adding and deleting tasks.

## Author

- **David Proaño**

- **Email**: dapzpro@gmail.com

- **GitHub**: <https://github.com/dapzpro>
