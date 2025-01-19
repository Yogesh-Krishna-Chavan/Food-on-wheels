import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //State variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log("Rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
    // console.log("UseEffect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.624922547673854&lng=73.72566897422075&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    setListOfRestraunt(
      //Optional Chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      //Optional Chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline...📴 Please check your internet....🛜</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
              type="text"
              data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1.5 bg-green-300 m-3 rounded-md"
            onClick={() => {
              //Filter restaurant and update UI
              //Search Text
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1.5 bg-green-300 rounded-md"
            onClick={() => {
              //Filter
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestraunt(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName: </label>
          <input
              className="border border-black p-2"
              value={loggedInUser} 
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
