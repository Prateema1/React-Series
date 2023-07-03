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
