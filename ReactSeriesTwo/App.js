  import React from 'react';
  import ReactDOM from 'react-dom/client';

  //React.createElement("type of tag", { attributes}, [children]);
  //React.createElement is not an HTML element, It creates an object and when we render these elements on DOM, then it becomes an HTML element.

  const parent = React.createElement("div", { id: "parent"},[
    React.createElement("div", { id: "child"},[
        React.createElement("h1", {}, "I am an h1 tag of child element"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]),
    React.createElement("div", { id: "child2"},[
        React.createElement("h1", {}, "I am an h1 tag of child element"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ])
  ])
  
  console.log(parent); //object

  const heading = React.createElement("h1", 
  {
    id: "heading"
  }, "Hello World From React");

  console.log(heading, "HEADING");

  //Create React element using JSX
  const jsxHeading = <h1 id="heading">React using JS</h1>
  console.log(jsxHeading, "JSX HEADING");

  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //root.render takes the object and converts it into HTML and push it into browser.
  //root.render is putting parent object inside root element
  root.render(parent);