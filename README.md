# Getting Started with Create React App

## useEffect hook

Its is used to perform side effects in React. Side effect in react means
anything outside the react scope. For Eg using the native webApis like
local Storage, calling some back end api for data, directly modifying
the components using the dom methods like document.getElementById("sport").innerHTML="i love foot ball". All of this will be done inside the useEffect
hook . useEffect hook has two paramenter,First parameter is the actual function
that needs to be performed and second is the dependency. Dependices are nothing 
but the variables used by the first function


useEffect(<function>,<dependency>)

function Countter(){
const [count,setCount]=useState(0);

we can use a setTimeout function to increment the count by one.
useEffect(()=>{

    setTimeout((count)=>setCount(count+1),1000)
}
)

return (<>
<p>the counter value is {count}</p>
</>)
}

here in the above use Effect we are not supplying any dependencies.hence the 
whenever the component renderers the useEffect will execute. here when the count increases the component will re-render causing the useEffect to run again

a. If we suppling an empty array as dependency then the use Effect will only run once

useEffect(()=>{},[])

b. We can also pass the variable as a paremeter to the useEffect function. In this case  the useEffect will run during the initial render and also when the dependecy changes.


function squareCounter(){


const [count,setCount]=useState(0)
const [calculation,setCalculation] =useState(0)


useEffect(()=>{


setCalculation(()=>count*2)

},[count])




return (<div>

<p>the count is :</p>
<button onChange={(count)=>setCount(count+1)} >IncrementCount<button>

<p> the calculalated value=: {calculation}<p>
</div>)


}

}

The above useEffect will run during initial rendering and also when the count 
changes. ie when click on the increment Count button


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
