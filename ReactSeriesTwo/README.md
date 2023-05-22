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
