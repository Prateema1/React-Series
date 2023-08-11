import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_DATA_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const Body = () =>  {
  // Local State Variable - Super powerful variable
        const [listofRestaurants, setListOfRestaurants] = useState([]);
        const [filteredRestaurant, setFilteredRestaurant] = useState([]);
        
        const [searchText, setSearchText] = useState("");

        const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

        useEffect(() => {
             fetchData();
        }, []);

        const fetchData = async () => {
          const data = await fetch(
            RESTAURANT_DATA_URL
          );
          const json = await data.json();
          setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        }

        const onlineStatus = useOnlineStatus();

        if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>

        if(listofRestaurants.length === 0) {
          return <Shimmer />
        }

        const { loggedInUser, setUserName } = useContext(UserContext);

    return listofRestaurants.length === 0 ? (
    <Shimmer />  
    ) : (
      <div className='body'>
        <div className='flex'>
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
              setSearchText(e.target.value)
            }} />
            <button 
             className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the restaurant cards and update the ui
                  console.log(searchText)
                  const filteredRestaurant = listofRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurant);
            }
            }
            >
              Search</button>

    
          </div>

          <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
              const filteredList = listofRestaurants.filter(
              (res) => res.data.avgRating > 4
             );
             setListOfRestaurants(filteredList);
          }}
          >
            Top Rated Restaurant</button>
          </div>

          <div className="m-4 p-4 flex items-center">
            <label className="m-4">UserName</label>
            <input className="border border-black" type="text" value={loggedInUser} onChange={(e) => {setUserName(e.target.value)}}></input>
          </div>
         
        </div>
        <div className='flex flex-wrap'>
            {
              filteredRestaurant.map((restaurant) => (
                
                <Link to={"/restaurants/"+ restaurant?.info.id}>
                  {
                    restaurant.info.promoted ? ( <RestaurantCardPromoted resData={restaurant} /> ) :
                    (
                      <RestaurantCard key={restaurant?.info.id} resData={restaurant?.info} />

                    )
}
                </Link>
                  
                  
              ))
                };
        </div>
      </div>
    )
  }

  export default Body;