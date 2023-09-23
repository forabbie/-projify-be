# Projify-FE

Vue.js Project with Tailwind CSS and Flow Bite UI Library

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Testing](#testing)
- [Usage](#usage)

## Getting Started

Provide instructions for setting up and running your API application locally.

### Prerequisites

List any prerequisites or dependencies that need to be installed/configured before using your API application.

- Prerequisite 1 (e.g., Node.js, Python 3.x)
- Prerequisite 2 (e.g., Database server)

### Installation

```sh

# Clone the repository
git clone https://github.com/forabbie/projify-fe.git

# Change directory to the project folder
cd projify-fe

# Install dependencies
npm install

# Lint with [ESLint](https://eslint.org/)
npm run lint

# Compile and Hot-Reload for Development
npm run dev

# Compile and Minify for Production
npm run build

```

## Testing

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

## Usage

Folder structure

```sh
  src/
  |-- assets/
  | |-- images/
  | |-- styles/
  | |-- fonts/
  |-- components/
  | |-- elements/ - molecules
  | |-- layout/ - organisms
  | |-- modules/ - organisms + template
  |-- plugins/
  |-- router/
  | |-- index.js
  |-- store/
  |-- services/
  |-- utils/
  |-- views/
  |-- App.vue
  |-- main.js

```
