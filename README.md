# Blog de Aprendizaje — Frontend

A modern web interface for an educational blog platform, built to share knowledge, explore learning resources and connect with a backend REST API.

<p align="center">
  <img src="https://img.shields.io/badge/React-149ECA?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white" alt="Axios" />
</p>

---

## Overview

**Blog de Aprendizaje** is the frontend of an educational blogging platform designed to make knowledge sharing accessible through a web interface.

Built with React and Vite, the application provides the foundation for interacting with educational content and consuming data from a REST API. Its component-based architecture supports reusable UI elements and a structured approach to frontend development.

This project is part of a full-stack application, working alongside a dedicated backend that handles posts, comments and data persistence.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based user interface |
| Vite 6 | Development server and build tooling |
| JavaScript ES Modules | Application logic and modular code |
| Tailwind CSS 4 | Utility-first styling |
| Bootstrap 5 | UI styling and responsive components |
| Axios | HTTP requests to the backend API |
| React Router DOM | Client-side navigation |
| React Icons | Icon components |
| React Hot Toast | User notifications |
| ESLint | Code quality and linting |

## Key Highlights

- **Component-based architecture:** Build reusable interface elements with React.
- **API integration:** Communicate with the backend using Axios.
- **Client-side routing:** Navigate between application views with React Router.
- **Responsive UI development:** Use Tailwind CSS and Bootstrap to build adaptable interfaces.
- **User feedback:** Display notifications through React Hot Toast.
- **Modern development workflow:** Use Vite for fast local development and optimized production builds.
- **Code quality:** Run ESLint to identify potential issues in the codebase.

## Full-Stack Architecture

The frontend communicates with a separate backend responsible for processing requests and managing application data.

```text
┌─────────────────────────────┐
│       React Frontend        │
│                             │
│  Components · Views · UI    │
└──────────────┬──────────────┘
               │
               │ HTTP Requests
               │ Axios
               ▼
┌─────────────────────────────┐
│       REST API Backend      │
│                             │
│    Posts · Comments         │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│          MongoDB            │
│       Data Persistence      │
└─────────────────────────────┘
```

**Related repository:** [Blog-Backend](https://github.com/Blog-De-Aprendizaje/Blog-Backend)

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

You will also need access to a running instance of the [backend API](https://github.com/Blog-De-Aprendizaje/Blog-Backend) for features that require server communication.

### Installation

Clone the repository:

```bash
git clone https://github.com/Blog-De-Aprendizaje/Blog-Frontend.git
```

Navigate to the project directory:

```bash
cd Blog-Frontend
```

Install the dependencies:

```bash
npm install
```

### Run in Development

Start the Vite development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

### Build for Production

Generate an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Backend Integration

The frontend uses Axios to communicate with the backend API.

Before testing features that require data from the server, ensure the backend is running and that the frontend's API configuration points to the correct address.

Backend repository:

[https://github.com/Blog-De-Aprendizaje/Blog-Backend](https://github.com/Blog-De-Aprendizaje/Blog-Backend)

For available API routes and request formats, consult the backend's documentation.

## Code Quality

Run the linter to check the codebase:

```bash
npm run lint
```

This helps maintain consistent code quality and identify potential issues during development.

## License

This repository includes an MIT license. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <sub>Developed by <a href="https://github.com/Blog-De-Aprendizaje">Blog de Aprendizaje</a></sub>
</p>
