# Igniting The App

## npm

- It doesn't have a full form. It basically manages packages. It is a standard repository where all the packages are hosted and is one of the biggest package manager. For example: all the libraries and utilities that we need comes from npm.

## package.json

- A configuration file for npm.

## bundler

- It bundles (packages) our application properly., so that it can be shipped to production. Example of bundlers include webpack, parcel, vite etc. Thay all do tha same thing but in a different way. The algorithm is behind them can be different.

### parcel

- It is one of the most popular bundler. It's configuration is also easy. It provides strength to our program.

## Dependencies

- There are 2 types of dependencies.
  -- Dev dependency
  -- Dependency

## package-lock.json

- keeps track of all the exact version of all the dependemcies.

## node modules

- Collection of dependencies. Contains all the code of the dependency used in our system . It's like a database where all our packages exist.

## Transitive dependencies

- dependencies can have its own dependencies and so on. This is called transitive dependencies.

- If we have package.json and package.lock.json we can regenerate our node modules. Whatever we can regenerate, do not push that to git.

## npx -

- Executing a package without installing the package locally. It will execute directly from the online repository.

### Command line to get parcel ignite our app

- npx parcel index.html (entry point of our app)

## Ways to get React into our project

- via CDN link (But not a prefferred way)
- via npm (installing as a dependency)

...

# Parcel

- Dev Build
- Local Server
- HMR (Hot Module Replacement) - File Watching Algorithm, written in C++
- Caching - Faster builds
- Image optimizations
- Minification of files
- Bundling of files
- Compress files (removes white spaces and more)
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking (It will tree shake the file and remove unused codes for us. For example, if there are 20 functions but only 5 are being used, it will automatically remove rest of them.)
- Creates different dev and prod bundles (build)

## NOTE

................................................................

- For production build: npx parcel build index.html
- We have to remember to remove main: App.js from package.json file because it create a conflict for entry point. we do not need that when we use parcel.

# Browserslist

- To let our project know about what browsers they support. It will be configured inside package.json file as an array of strings. The mentioned array will definetly be supported but the other browsers that are not mentioned will also be supported..

# CORE OF REACT IN THE BEGINING

- To create elements before:

const heading = React.createElement(
"h1",
{ id: "heading" },
"Hello React"
);

## JSX (JavaScript Syntax Extension)

- We can write React without using JSX also. JSX is not a part of React. They are both different.
- But JSX makes it easier for developers to write code.
- JSX is not HTML in JavaScript but it is like a HTML-like or XML-like syntax.

## babel

- a open source JS compiler
- converts(transpiles) our JSX to React code/ code that browser understands.
- converted to React.createElement that make ReactElement which is a JS Object that is finally rendered as an HTML element.
- So, at the end of the process JSX is simply React.createElement under the hood.
- It can also convert newer version of Javascript code (ES6) to a version that older browsers support.

## Multiline JSX

- have to wrap JSX inside round brackets because babel need to know the starting point of JSX elements.
- Example:
  -- (<h1 className="head">
  Hello React using JSX
  </h1>
  )

  ## React Components

  ### Class Based Components - OLD (Found still in some legacy codebase)

  -

  ### Functional Component - NEW

  - It is just a normal JavaScript function which returns some JSX element.
  - OR A JS function that returns a React element
    -b To render a Component:
    --- root.render(<FunctionalComponent />)
  - Components cannot be accessed before initialization. JS will now allow us to do that.

  ## Component Composition

  - Component inside a component
  - composing two components into one another
  - Example: As React Component is just a normal function, we can call a component as a function too:

  --- {FunctionalComponent()}
  --- <FunctionalComponent />
  --- <FunctionalComponent></FunctionalComponent>

  ## Super power of JSX

  -- Curly braces anywhere inside JSX , we can write any JS expression inside it.
  -- Also, JSX sanitizes the data first and then executed in case of Cross Site Scripting attack.

  - Whenever we write JSX, it can only have a single parent at the top level (root), i.e JSX expressions must have only one parent element.
  - For nested structure, we can create a div and inside div we can write any element.

  ## React.Fragment

  -- The solution to writing div as a wrapper parent.
  -- Instead we can wrap elements, inside <React.Fragment></React.Fragment>
  -- It behaves like an empty tag
  -- But it can make our code look a bit ugly, JSX actually created an empty tag.
  -- For example: <></>

  ## Making Code Modular

  -- Whenever we have a lot of use of a feature. For example : A restaurant card, always create a separate component for it.

  ## props (properties)

  -- Whenever we want to pass dynamic data to our component, we use props. Props are just like arguments to normal functions.

  -- React takes the props (arguments in the Component function) wraps everything inside a prop object and then passes it to the component function as parameters.

## Config Driven UI

-- Websites driven by data/config is known as Config Driven UI. Contorlling how our UI looks like based on data. The data comes from backend.

-- For example: In case of a food delivery website, Let's suppose, some restaurant have discount offers in Bangalore and not for Delhi. In this case, we will not be buiilding different UI for each location, right? We will simply have config driven data that helps to differentite data based on need and apply it dynamically.

-- The config will itself drive the UI.

## keys in React

-- Whenever we loop over an array using map or any other function, we need to provide unique key to each child in the list.

-- They need to be uniquely represented because of the following reasons:

--- Let's suppose we have a list of restaurants.
--- After some time, a new restaurant gets added to the first of the list.
--- Now, if there were no id's, React will re-render all the restaurant cards as it cannot uniquely identify the restaurant in this case.
--- Similarly, the same happes again and again as new restaurant cards gets added to the list.
--- But, if we gice each restaurant card with unique id and now new restaurant card also comes with its own unique id (suppose: xyz), now, React will only render the new restaurant card and not all the existing restaurant cards.
--- It optimizes the performance significantly.

--- So, we should make a habit to include keys.

--- Also, sometimes we tend to put the index as the key. But, REACT offical docs also suggest not to use the index as the key.
--- This is because, it is possible that the order of the list items may be chaged or deleted depending upon the scenario.

## Food Ordering App

{/\*\*
Header - Logo - Nav Items - Cart

        Body
           - Search Bar
           - Restaurant List
              - RestaurantCard
                  - Image
                  - Name
                  - Rating
                  - Cuisines


        Footer
          - Links
          - Copyright

      */

      }

## Importing & Exporting Components

### Exporting Components

--- Two common methods to export:
----- 1) Default export - One file can only have one default export. export default Component;
------ 2) Named export - When we need to export multiple things from the same file. export const Component.

### Importing Components

--- --- Two common methods to import components:
----- 1) Default import: import Component from 'path';
------ 2) Named import: import {Component1, Component2} from 'path';

## Normal JS Variable v/s State variables

--- State variables are super powerful variables.
--- It is possible due to React hooks. We can use React hook that is "useState".

## React Hooks

--- A React hook is a normal JS utility function provided to us by React. It is a pre-built and it has some logic written behind in React. It is a kind of utility given to us by React.

--- Normal JS utility function
--- useState() : 1) Used to generate super powerful state variables in react. 2) To maintain the state of the component. 3) Keeps our UI in sync with the Data layer.

--- useEffect() : Takes 2 arguments: 1) A callback arrow function and 2) Dependency Array
----- useEffect callback function is called after our component renders.
---- So, if we need to do something after the component is rendered, we have to do it inside useEffect hook.

## render

--- Whenever a state variable updates, React re-renders the components.

### What is re-render?

--- Whenver the state variable gets updated from anywhere, React quickly updates the UI.

## What is tha core of React?

--- Fast and efficient DOM manipulation

## How does React achieve that?

--- Using Virtual DOM

### Virtual DOM

--- It is a representation of the actual DOM.
--- It is a normal JavaScript object.

## Origin MisMatch (CORS Policy)

--- Our browser's blocks us to call an API from one origin to another origin.

## Bypass the CORS issue

--- We can use cors chrome extension for bypassing for out test applications.

## Shimmer UI

--- We can improve the experience of page load to the user either by: Showing a spinning loader when the data is empty but it is not a preferrable way.

--- Instead we can use the concept of Shimmer UI.

--- Shimmer UI resembles the page's actual UI and we show the page(like a fake page or skeleton) until data is available.

## Conditional Rendering

-- Rendering based on condition.

## Normal JS Variables v/s React State variables

-- Can we use local variable in case of State Variable if a React component?

-- What is the super power that the state variable of React has and not a normal JS variable?

--- If we want to make our component dynamic, we should use local state variables.

-- Whenever our state variable changes, React will re-render the component and all new data will be in sync with our UI layer.

-- Does one state change variable renders the whole component or only the changed part?

-- Whole component will be rendered/refreshed quickly.

-- Rendering a component means calling the component.

-- Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)

## Search Functionality

-- What things we should take care of?

--- To bind the user input with the component's state variable.
--- Handle input "Case Sensitivity" and matching input string.
-- Make sure filter works on all the relflected data in the page.

## Why React is fast?

-- Becasue it handles DOM manipulation very effectively. It uses React Fiber (new reconciliation process) to effectively find out the difference between between old virtual DOM and new DOM. And find out the which node has changed and update that portion only but we have to remember always that the component re-renders always.

## useEffect Hook

-- Called on every render id no dependency array.
-- If empty dependency array is present, called only once on the first render.
-- if dependency is present, everytime useEffect will be called when the dependency value updates.

## useState Hook

-- Never use it outside the functional component.
-- Always use it at the top of the functional component (higher level).
-- Never use it inside if else conditionals as it can create inconsistencies in the program.

## Routes

-- Using the most popular React Router DOM

--- Using this library in our React project, we can create routes.

-- Install the latest version using : `npm i react-router-dom`

-- Import and configure Route configuration. (Array of objects : path: path,
element: component).

-- createBrowserRouter and RouterProvider (Component provided to us by React Router DOM)

-- After creating the configuration, we need to provide it

## Page

-- It is a composition of components.

## Error Handling For random route path

-- Create your own custom Error Component and shoe the Component when there are errors.

-- Add the compoent in the path object as errorElement.

-- React Router DOM gives us a hook "useRouteError" which gives us more information about the error. So, that we can display bettwe message on the error page to the user.

## Children Routes

-- The Issue: If we are navigating to different routes, our Header and Footer are not present.

-- To make this functionality, we need to make children routes.

-- On your root route, we need to put other routes as children routes. children : [{}]

-- React Router DOM gives us another component named "Outlet". Whenever there is change in the path, the children according to the routes comes gets loaded the Outlet component.

-- Outlet is replaced by the component according to the path. As a user we won't see the Outlet page.

## Linking Pages

--- TO Remember:: Never use an anchor tag in the React project as it refreshes whole page.

-- In react, we can navigate to another page, withour re-loading the whole page.

-- So, how can we do this is React?

----- Using Link. It is a super power given to us by React Router DOM using a Link Component. It is very fast and won't reload our page.

-- It only refreshes the page.

-- This is why React Pages are called Single Page Application.

## Single Page Application (SPA)

-- In SPA, when we navigate through different pages, our browser will not reload the page/website or external call. Only the component refreshes.
-- Only One HTML page and component is just getting interchanges via client side routing.

## Types of Routing in Any Web Apps

-- 2 Types of routing we can have in Web Applications:

---- a) Client Side Routing: On the first App load only, we have all the components, so when we navigate pages, it only has to refresh the componet.

---- b) Server Side Routing : We make a network call for getting the html pages and has to reload the page.

## Dynamic Routing

--- As we change page, the data loads according to the component.

## Link

-- React Router DOM gives us this Link Component. It is a wrapper around the anchor tag. As browser does not understand Link, React Router DOM makes it an anchor tag behinf the scene.

## Class Based Components

-- It is an old way of creating components in React.

-- We can still find Class based components in companies. So, we need to understand how to create a class based component.

-- It is just a normal Javascript Class that extends React.Component that has a render method that returns some piece of JSX.

-- The JSX will be converted into HTML and displayed in the browser.

## How to pass data using props in React Class Based Components?

-- In the Class, use constructor to receive the props and always include super.

## super(props)

-- It is used to call the constructor of its parent class. This is required when we need to access some variables of its parent class. Props: It is a special keyword that is used in react stands for properties. Used for passing data from one component to another.

## this keyword

-- We need to use this keyword so that we can access the props passed from parent component anywhere in the receiving class.

--- Whenever we create the instance of a class, the constructor is called.

## Creating state variables in React Class Based Components

-- Loading a Class Based Component in the Webpage , it means we are creating a new instance of the class and providind it some props. When we create a new instance of the class, the constructor is called. So, this is the best place to create a state variable and receive props.

-- Using this.state = {}

## Updating state variables in React Class Based Components

-- Note: Never Modify state variables directly. this.state.count = this.state.count++;

-- So, what is the right way?

--- React gives us acces to an important function setState();

-- Using this we can set State variables.

## Life Cycle Methos of Class Based Components

-- Component loads -> parent life cycle is triggered -> constructor called -> render menthod called -> coponentDidMount called.

-- In the case of Child Component: -> Parent constructor called -> parent render called -> rendering continues -> finds Child Component -> -> child's lifecycle method is triggered -> Child constructor called -> Child Render Called -> child's componentDidMount called -> parent's componentDidMount called.

-- In case of miltiple child components: Parent constructor -> parent render -> child1 constructor -> child1 render -> child 2 constructor -> child2 render -> <DOM UPDATED - IN A SINGLE Batch (optimizes the performance)> -> child 1 componentDidMount -> child2 componentDidMount -> parent's componentDidMount

-- The Mounting Phase Happens in 2 Phases:
--- 1) Render Phase
--- 2) Commit Phase

-- React optimizes in the way that it batches the render cycle of multiple children and then after completion of render phase cycle, it again batches the commit phase for the multiple children. It batches because in the commit phase React updates the actual DOM which is the constliest operation. But in the render phase, React is trigerring the reconciliation phase, in this phase there are objects , it finds out the diff in the virtual DOM. Render phase is very fast because react is working with Virtual DOM whhich is JavaScript object in itself.

## componentDidMount()

-- Mounting: Showing into the UI

-- When component is loaded, constructor is called , render is called and as soon as it
it mounted on the DOM, this will be called.

## componentDidUpdate()

-- Once the component's componentDidMount() method is called and state variable updated with some API call data or any other update, the render is called with new state variable and the JSX is loaded. After the render is complete, React updates the DOM and then finally componentDidUpdate() is called.

## componentWillUnmount()

-- Unmounting : Removing from the UI

-- When we change the component, from the current component, componentWillUnmount is called.

### Use Case of componentWillUnMount()

--- As React is SPA, if we have a setInterval function in componentDidMount of one Component and if we move to another Component, it still keeps on the interval because we are not reloading the page. This is kind of a power of SPA as well as cons.

-- So, in this situation, componentWillUnmount is very useful. Here, we can clear the interval.

## Never compare Class Based components life cycle with Reacts Functional Component.

-- useEffect is a completely different and new way.

## Optimising The App

-- Following Single Responsibility Principle
-- Code becomes reusable, testable and maintainable.

-- How can we apply this principle in our React project?

--- Remember, there are no hard rules that states that this component follows SRP but when someone else sees you code the code should be self explanatory.

-- Makes code more modular.

## Custom Hooks

-- As hooks are just normal JS functions but that has some power given to us by React.

-- Whether it is a custom hook or hook given us by React library, they are same.

### Why and when should custom Hook be used?

-- It makes our code modular, readable and maintainable.

-- So, that one component can have one responsibility.

#### Writing a custom hook

--- useCustomHookName()
--- Can write state variable inside custom hook function too.

## Optimising Our React App

-- We have to logically break our app into smaller bundles so that we do not put load into a single bundle.This process is know as "Chunking/Code Splitting/Dynamic Bundling/Lazy Loading/on demand loading/dynamic import".

## Lazy Loading

-- Only when you navigate to a component, then only the component code should be loaded.

-- We will only load when required which is also known as on demand loading.

## How can we achieve that?

-- Using lazy function given to us by React library.

-- This function take a callback and in the callback functions body we will pass path of the component to be loaded inside import function.

-- But this will not work properly because when we change the component from Home Page to ANother Page, react tries to load but it can't load until the component's code is available.

-- So, what should React render?
-- Meanwhile React want something to render in the screen in the middle.

-- We can do that using Suspense Component.

## Suspense

--- It is a componet given by React library, thorugh which we can wrap our component into Suspense.

## Different ways of writing CSS

-- CSS
-- SaSS
-- ScSS
-- Styled Components (Most preferred for React)
-- Material UI
-- Bootstrap
-- Chakra UI
-- Ant Design
-- Tailwind CSS (Latest)

## Tailwind css

-- Its a generic css framework

-- Can generate css on the fly.

-- Only used css class that are absoulutely necessary on build.

## Higher Order Components

-- It is a normal JS function that takes an existing component enhances it based on data and returns a new component.

-- For example: Promoted Feature in Restaurant Cards for Foor Ordering Websites.

-- The Higher Order Component will generate a new component.

## Controlled and Uncontrolled components

--- When the parent component has control over the state of the child component, the child component is called controlled component.

--- When the parent component has no control over the state of the child component, and the child component manages their own state, it is called uncontrolled component.

## Lifting The State Up

--- In order to control the children component from the parent component, we need to lift the state up. Example: Expandable and Collapsable Accordion. When one Accordion is expanded, others shoule collapse and vice versa.

## One Way Data Flow

--- In React, data is passed from parent to children and from children to their children that is from top to bottom.

## Props Drilling

--- Example: Let us suppose we have seven to eight level of nesting in the components and we need to pass data from First Level Component to the Leaf Component(Last). In this situation, we need to pass data from First Level Component to all the intermediate components (parents) before finally reaching the Last Level Component. This is known as props drilling.

-- This is an issue in case of passing data. We should avoid props drilling because all the intermediate level components that didn't require the props.

-- Its not a good way to pass data to this nested level of components.

-- To solve this we can have a global place where our data is kept which anyone can access. This is known as "Context". It makes our data layer very powerful.

## Context API

-- What kind of data can be kept in the global place?

-- Example : Logged In User Info, Theme (App Dark or Light Theme)

-- This data we can hold in the context and can be used anywhere in the application.

### Creating Context

-- As it is global, let's create it outside components folder. Like utils folder.

-- React gives us a utility function createContext() which we can use to create Context and to use the context in components React provides us a hook called "useContext".

-- We can create as many context as we want to.

#### Should we put all the data in the context because this way we do not need props?

---- No, it is not the case. Only the data that can be used in multiple places makes sense to put in the context.

#### 2 ways to /consume the context

--- In functional components, use useContext hook.

--- In Class components, we can use the Context as Component that takes a callback function, where we will have access to the context data.
--- Example: <Context.Consumer>
{(data) => console.log(data}
</Context.Consumer>

#### How to pass the updated context value to all the components using the context value?

--- React provides us Provider. We can wrap our App Layout with Context.Provider and use it as a component wrapper and pass the value as props from it.

-- This new value now will be present in all the components that is using the context value.

-- If we want our provider for only small portion of our app/ one component, we can also do that.

#### Can we have nested context provider with different values?

--- Yes. The provider that has wrapped the nearest component will use that provided value.

## Redux Toolkit

-- State management tool
-- Not mandatory for every project.
-- For small and mid-sized projects, Context can be used.
-- For large projects, where heavy read and write operation are happening, then we can use Redux.
-- Redux is a separate library which we install in our project and use it.
-- Redux is not the only library. Another example is zustand.

### Whe we use Redux Toolkit?

-- Helps us to manage and handle the state.

-- Applications become easier to debug because we have Redux Dev tools that helps us debug easily.

## Libraries we will be using

-- React-Redux : Library to bridge the gap between React and Redux.

-- Redux Toolkit: newer way to write Redux logic.

## Redux Store

-- It is a kind of big JS object with a lot of data inside it and it is kept in a global central place.

-- Any component can access the redux store. It can write to it as well as read from it.

## Slice

-- In order to avoid having a single large object of data, we can have logical separation in the redux store known as "Slice". Example: Cart Slice, User Slice etc.

## How to modify/add the redux store?

-- When we click on a button , it dispatches an action which then calls the reducer function and finally the reducer function updates the slice in our redux store.

## Read the updated data from the redux store.

-- In order to read the data, we need to use Selector.

-- Our component is subsribed to the redux store using Selector.Now, our component is in sync with the redux store.

-- Now, whenever data changes in the slice of the redux store, it will automatically update the content of the cart.

-- This all happens behind the scene.

## Installation

-- Install @reduxjs/toolkit and react-redux
-- Build our store
-- Connect our store to our app

- Slice (cartSlice)
  -- dispatch(action)
  -- selector

  ## Types of testing (developers can do)

  -- Unit Testing
  -- Integration Testing
  -- End to End testing

  ### Unit testing

  -- Testing one specific unit of our application is known as unit testing. Example: Can be a test of a component in isolation.

  ### Integration Testing

  -- Testing the integration of components. As we know, our compoennts talk to each other to make a feature. Testing such feature is known as integration testing. We will test the flow of components.

  ### End To End Testing (e2e)

  -- This test starts from when user lands on the page to leaving the app. Testing user flow through the application.

  ## Testing Library

  ### React testing Library

  -- It is built on top of DOM testing library.

  -- As we have built our app from scratch and not used create-react-app, we will need to integrate the testing library ourselves from scratch.

  -- React Testing library uses Jest.

  -- RTL uses Jest behind the scenes, so we need both to test our application.

  ### Jest

  --- Jest is a JavaScript Testing framework.

  ## Setting up testing in our app

  -- Install React Testing Library
  -- Install jest
  -- Install babel dependencies as we are using jest with babel
  -- Configure babel
  -- Configure Parcel config file to disable default babel transpilation.
  -- Jest configuration : npx jest --init
  -- Install jsdom library
  -- Install @babel/preset-react to make JSX work in test cases.
  -- Include @babel/preset-react inside babel config
  -- Install @testing-library/jest-dom

  ## Overriding default babel configuration that comes with parcel

  -- As parcel comes with default babel configuration for transpilation, we need to configure parcel config file to disable default babel transpilation.

-- We can do that by creating .parcelrc file and write the configuration from official parcel documentation.
https://parceljs.org/languages/javascript/#usage-with-other-tools

## Basics Of Testing in React

-- Render component
-- Querying
-- Assertion

### How to manage large number of test cases

-- We can use describe function to group multiple test cases into a single block.

-- We can slo write it instead of test. It is just an alias for test. Both works the same way.
