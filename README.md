# Encyclopaedia Web App

## Goal:

To display Known World lore created in markdown files for Obsidian on a GitHub Pages web app.

URL: https://lukebrider-woolard.github.io/known-world-encyclopaedia/

## Development:

Markdown files are created in Obsidian as a part of my personal lore notes.

A Vite React-TypeScript web app is then used to display select items from this lore repository.

### Working with the code:

- Clone the repository.
- Run the command `yarn install` in the root of the directory to install node packages.
- Run the command `yarn dev` in the root of the directory to run a localhost version of the app.
- Make some changes.
- Push changes into the `main` branch either directly or via a pull request.
- To deploy changes to the GitHub Page, run a pull request from main onto the `live` branch. When the pull request merges succeessfully a GitHub Action triggers automatically - building the app to a `dist` directory which it then deploys as a static web app.

## Legal

All lore work for the Known World presented in this repository is the intellectual property of Luke Brider-Woolard.

The Known World© - Luke Brider-Woolard 2013
