  /** Creating nested element using React
   * 
   * <div id="parent">
   *    <div id="child">
   *        <h1></h1>
   *     </div>
   * </div> 
   * 
   * ReactElement(Object) => HTML(Browser UnderStands)
   */    
  
  const parent = React.createElement("div", 
  { id: "parent"},
  React.createElement("div", {
    id: "child"
  }, 
  React.createElement("h1", {},
  "I am an h1 tag of child element"
  )
  )
  )

  console.log(parent);

  const heading = React.createElement("h1", 
  {
    id: "heading"
  }, "Hello World From React");

  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);