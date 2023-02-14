## Package

This package is for Rotor Studio's clock code challenge.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test-coverage`

Launches the test runner to collect test coverage. (npm only)\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Design

### Clocks

Clock components `AnalogClock` and `DigitalClock` are designed to be used standalone.

Use CSS way to create clock, hands and digits in these clocks, however using svg or fonts could do the same way.

### Customer Hook

A customer hook `useCurrentTime` to provide current hours, minutes and seconds.

### React Context

A React context providing current time object is to reflect `Segregate data from UI in a way that both layers could be used separately` in the requirement.

## CSS

Used plain css, however considering the complexity of the css code in this challenge, a preprocessor works better.

## Unit tests

Used snapshots and got 100% covered.

To run unit tests with `react-script`, you may need to upgrade your node.js to >= v16.
