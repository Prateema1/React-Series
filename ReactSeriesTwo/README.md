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
   - HMR (Hot Module Replacement) -  File Watching Algorithm, written in C++ 
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

