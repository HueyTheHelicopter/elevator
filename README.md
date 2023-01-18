# Requirements to run and successfully compile project:
Node.js, React Bootstrap [`npm install react-bootstrap`]
### Easy start: 
1. open terminal and go to the directory where you want to place the project,
2. run `npx create-react-app 'new-app-name'` (*without quotes*),
3. don't forget for `npm install react-bootstrap`,
4. *src* folder from this repo replace with *src* folder in newly created project.
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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Description of Project components:

***./src/App.js*** -- main application file that renders all others and provides contexts to them.

***/src/App.css*** -- holds most of the styles used in this project.

***./src/context/index.js*** -- holds contexts such as `desiredFloorContext, ElevatorFloorContext, MuteButtonsContext`. Contexts allow different components to listen them, without providing properties explicitly.

***.src/images/*** -- contain images of valls and elevator.

***.src/styles/*** -- contain css style for elevator component.
### Components
***./src/components/ControlButtons.jsx*** -- constantly renders alert component with information about elevator's current floor; renders buttons along with providing their functionality. When button is pressed and elevator is not moving, at this moment `desiredFloorContext` will be changed to the choosed one and elevator start moving. If button pressed while elevator is moving, the modal alert component will showup telling that buttons are muted while elevator is moving. Whether the elevator is on the move determines on the `MuteButtonContext` state.

***.src/components/Building.jsx*** -- renders building container that holds floor containers. `makeFloor` function iteratively returns Floor components. Iteration begins "from" `numberOfFloors` "to" `0`. It allows to receive array of floors from last to first and render them in that order, highest floor on the top of the page, first floor on the bottom. Returned componend pushes to `arrayFloors` array. When iteration ends `setIsRender` function receives boolean `true` and whole building renders by mapping over `arrayFloors`.

***./src/components/Floor.jsx*** -- recieves number in props that corresponds to floor container that will be rendered. Floor container also have container for Elevator component which is rendered if `ElevatorFloorContext` is equal to `thisFloor` value, that means that elevator is on that floor now ind have to be rendered.

***./src/components/Elevator*** -- by using useEffect React hook, this component always listens to `desiredFloor` variable of `DesiredFloorContext`. As `desiredFloor` changes and it is not equal to `elevatorFloor`, `setMuteButtons` function sets to `false`, next function `moveElevator` fires. It determines in which direction elevator should move and passes the corrsponding class with animation ('up' or 'down') from ./src/styles/elevator.module.css to Elevator component, next fires one of the asynchronous functions (`elevatorGoUp` or `elevatorGoDown`), both of these calls for `timer` function providing the callback function to it. Function `time` receives callback function executes it after 3.5 seconds. Callback function simply returns decreased or increased (by 1) value of `elevatorFloor` variable. Once `elevatorFloor` is equal to `desiredFloor`, `useEffect` changes style of elevator to default and `muteButtons` to `false`.
