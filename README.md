# Demo Routing

This repository demonstrates an approach to hosting React applications on GitHub pages. This is a Single Page Application fully deployed to [https://isqua.github.io/demo-routing-in-typescript-react-app/](https://isqua.github.io/demo-routing-in-typescript-react-app/). React-router is included.

If you’d like to do the same, follow these steps:

1. Enable Pages Deployment. Go to your Repository Settings, then the “Pages” tab. In the section “Build and deployment” select “Source”: `GitHub Actions`.
1. Copy the [.github/workflows/deploy.yml](./.github/workflows/deploy.yml) file from my demo repository and put it into your project to the same place: `.github/workflows/deploy.yml`.
1. Replace the PUBLIC_URL on [the 28th line](./.github/workflows/deploy.yml#L28) with the name of your repository. Perhaps, your repository is called `game`, so you should write:
   ```
   PUBLIC_URL: /game
   ```
1. If you **don’t have** a react-router or other routing solution, change the [26th line](./.github/workflows/deploy.yml#L26) from this:
   ```
   run: npm run build && npm run gh-pages:404
   ```
   to this:
   ```
   run: npm run build
   ```
1. If you **do have** react-router or something, add [gh-pages:404](./package.json#L18) line to your `package.json` scripts section:
   ```
   "gh-pages:404": "cp build/index.html build/404.html"
   ```
1. Go to the “Actions” page of your repository, select the ”Deploy” action, and if it is green, check the `https://<owner>.github.io/<project>` page, where `<owner>` is your GitHub username and the `<project>` is the name of your repository. E.g. [https://isqua.github.io/demo-routing-in-typescript-react-app/](https://isqua.github.io/demo-routing-in-typescript-react-app/).

----

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
