# Vue 3 Character List Demo
## Overview
A Vue 3 application that demonstrates API integration by fetching and displaying a list of Harry Potter characters from the Gryffindor house. Built with Vue 3, Vite, Pinia for state management, and Vitest for testing.

## Features
- Fetches character data from an external API
- Displays characters in a responsive list format
- State management using Pinia
- Loading states and error handling
- Comprehensive test coverage

## Tech Stack
- Vue 3 with Composition API
- Vite for build tooling
- Pinia for state management
- Vitest & Vue Test Utils for testing

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation
1. Clone the repository
2. Navigate to the project directory:
   ```sh
   cd exampleProject
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Configuration
Create a `.env` file in the root directory to customize your environment:
```env
VITE_PORT=8080  # Optional: Default port is 3000
```

### Development
Start the development server:
```sh
npm run dev
```

### Testing
Run the test suite:
```sh
npm run test
```

View test coverage:
```sh
npm run coverage
```

### Build
Create a production build:
```sh
npm run build
```
