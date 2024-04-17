## 👨‍💻 Description

The code for the UI is divided into a few components.

- App.tsx
- ChildrenList.tsx
- ChildrenPreview.tsx
- Error.tsx
- Loading.tsx

## 📦 Packages

- **[React Router DOM](https://www.npmjs.com/package/react-router-dom)** is implemented in order to navigate between the main page and handle potential UI errors.
- **[React Bootstrap](https://react-bootstrap.netlify.app/)** is implemented to speed up the dev process.

## 👷🏻‍♂️ Installation

1. Clone the repository
2. cd into ./app
3. Run `npm install` to install the dependencies
4. Run `npm run dev` to start the development server

## 📝 Notes

- Network requests are done using axios. Three main functions to fetch all children, as well as two functions for making POST requests in order to check in/out children. These functions are then used in useEffects of the custom hooks.
- State management is done using reducers in separate files, for separation of concerns. The list of children is initially fetched in its entirety, then loaded lazily in the UI based on the users scroll position.