# Encyclopaedia Web App

## Goal:

To display Known World lore created in markdown files for Obsidian on a GitHub Pages web app.

## Development:

Markdown files are created in Obsidian as a part of my personal lore notes.

A Vite React-TypeScript web app is then used to display select items from this lore repository.

### Working with the code:

- Clone the repository.
- Run the command `yarn install` in the root of the directory to install node packages.
- Run the command `yarn dev` in the root of the directory to run a localhost version of the app.
- Make some changes.
- Run the command `yarn build` in the root of the directory to bundle the web app.
- Push changes into the `main` branch either directly or via a pull request.
- Merge changes into the `live` branch using a pull request.
- The GitHub Page will be run from the `live` branch when a pull request merges using the `dist` directory (so it is essential that the build command is run before deployment).

## Legal

All lore work for the Known World presented in this repository is the intellectual property of Luke Brider-Woolard.

The Known World© - Luke Brider-Woolard 2013
