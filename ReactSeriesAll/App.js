  import React from 'react';
  import ReactDOM from 'react-dom/client';

  //React.createElement("type of tag", { attributes}, [children]);
  //React.createElement is not an HTML element, It creates an object and when we render these elements on DOM, then it becomes an HTML element.

  // const parent = React.createElement("div", { id: "parent"},[
  //   React.createElement("div", { id: "child"},[
  //       React.createElement("h1", {}, "I am an h1 tag of child element"),
  //       React.createElement("h2", {}, "I'm an h2 tag")
  //   ]),
  //   React.createElement("div", { id: "child2"},[
  //       React.createElement("h1", {}, "I am an h1 tag of child element"),
  //       React.createElement("h2", {}, "I'm an h2 tag")
  //   ])
  // ])
  
  // console.log(parent); //object

  // //React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)

  // const heading = React.createElement("h1", 
  // {
  //   id: "heading"
  // }, "Hello World From React");

  // console.log(heading, "HEADING");

  // //Create React element using JSX
  // const jsxHeading = <h1 id="heading">React using JS</h1>
  // console.log(jsxHeading, "JSX HEADING");

  // //React Functional Component
  // const HeadingComponent = () => {
  //   return <h1>Hello React Functional Component</h1>
  // }

  
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // //root.render takes the object and converts it into HTML and push it into browser.
  // //root.render is putting parent object inside root element
  // root.render(parent);

  
      {/**
       Header
          - Logo
          - Nav Items
          - Cart

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

  // Composing Components
  const HeaderComponent = () => {
    return (
      <div className='header'>
        <div>
          <img className="logo" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" />
        </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  }

  const RestaurantCard = () => {
    return (
      <div className='res-card'> 
      <img className='res-logo' alt='res-logo' src='https://b.zmtcdn.com/data/pictures/4/19872134/5f48b841a82680ff7bd1e5b7b7d72177_o2_featured_v2.jpg?output-format=webp'/>
      <h3>The Burger Company</h3>
      <h4>North Indian, Asian, South Indian</h4>
      <h4>4.5 stars</h4>
      <h4>35 mins</h4>
      </div> 
    )
  }

  const Body = () =>  {
    return (
      <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
      </div>
    )
  }

  const AppLayout = () => {
    return <div className='app'>
      <HeaderComponent />
      <Body />
    </div>;
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<AppLayout />)


  