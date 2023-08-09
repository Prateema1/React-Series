  import React, {Suspense, lazy, useEffect, useState} from 'react';
  import ReactDOM from 'react-dom/client';
  import Header from './components/Header';
  import Body from './components/Body';
  import About from './components/About';
  import Contact from './components/Contact';
  import RestaurantMenu from './components/RestaurantMenu';
  import Error from './components/Error';
  import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
  import UserContext from './utils/UserContext';
  import { Provider } from 'react-redux';
  import appStore from './utils/appStore';
  import Cart from './components/Cart';

const Grocery = lazy(() => import("./components/Grocery"))

  const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
//Make an API call and send username and password

const data = {
  name: "Pratima",
};

setUserName(data.name)
    }, []);

    return ( 
      <Provider store={appStore}>
     <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
   <div className='app'>
      <Header />
     <Outlet />
    </div>
      </UserContext.Provider>
      </Provider>
    )
  }

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
            path: "/",
            element: <Body />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/restaurants/:resId',
          element: <RestaurantMenu />
        }, 
        {
          path: '/grocery',
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
              </Suspense>
          )
        },
        {
          path: '/cart',
          element: <Cart />
        }
       
      ],
      errorElement: <Error />
    }
  ])

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<RouterProvider router={appRouter} />)


  