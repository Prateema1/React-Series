  import React from 'react';
  import ReactDOM from 'react-dom/client';

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

  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //root.render is putting parent object inside root element
  root.render(parent);