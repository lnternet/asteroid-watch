# 🛰️ Asteroid Watch

_Track space objects with real NASA data._

This is a frontend interview challenge based on a containerized React SPA that integrates with NASA’s OpenAPI. The project includes intentional issues to evaluate debugging, development, and deployment skills.

![Screenshot](https://raw.githubusercontent.com/lnternet/asteroid-watch/main/public/screenshot.png)

## 🧰 Tech Stack

- **React.js + TypeScript** – Single Page Application (SPA)
- **Vite** – Frontend build tool
- **Nginx** – Static file serving
- **Docker** – Containerized deployment
- **GitHub Actions** – CI/CD pipeline
- **Google Cloud Run** – Hosting
- **NASA OpenAPI** – Live space data

## 🔧 Prerequisites

- Git (https://git-scm.com/)
- Node (=>18.x) (https://nodejs.org/en/download/)
- Yarn (=>1.22) (`npm install --global yarn`)
- (Optional) Docker

## 📌 Guidelines

- You do **not** need to complete all challenges.
- Feel free to ask questions at any point.
- You may use search engines and AI to assist.
- If you use AI tools, be prepared to explain the generated code.
- You may push directly to `main`.
- CI/CD pipeline picks up changes in `main` branch and automatically deploys to Google Cloud.
- NASA OpenAPI demo token has limitations. Use mock response if necesary, already supported in `useAsteroidData` hook.
- Some challenges are extremely simple, but it's important to voice-over your thinking process out loud.

## ✅ Challenges

1. **Project does not build**  
   Investigate and fix the build errors. Commit your changes.

2. **Tests are failing**  
   Debug and fix the failing tests. Commit once resolved.

3. **Improve asteroid details**  
   Extend the API response types to match what’s currently shown as `N/A` in the collapsible section of the `AsteroidListItem` component.

4. **Production site is broken**  
   Try to identify the problem with the deployed site at:
   https://asteroid-watch-441752467572.europe-central2.run.app/
