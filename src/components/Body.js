import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {
    console.log("next render");
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    console.log(listOfRestaurants);
    console.log(filteredRestaurants);
    console.log(searchText);

    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.8932118&lng=76.6141396&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("me");
        console.log(listOfRestaurants);
        console.log(filteredRestaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("mine");
        console.log(listOfRestaurants);
        console.log(filteredRestaurants);
    };

     if (listOfRestaurants.length === 0){
        return (<Shimmer/>);
     }
      console.log("hi");
     return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                        console.log("one");
                    }}
                    />
                    <button
                    onClick={()=>{
                        
                        const filteredRestaurants=listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurants(filteredRestaurants);
                        
                    }}
                    >Search</button>

                </div>
                {console.log("oho")}
                <button className="filter-btn"
                onClick={()=>{
                    const filteredList= listOfRestaurants.filter(
                        (res)=>res.info.avgRating>4
                    );
                   
                    setFilteredRestaurants(filteredList);
                   

                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="resto-container">

                {filteredRestaurants.map((restaurant)=>(
                    <Link
                    to={"/restaurants/"+restaurant.info.id} 
                    key={restaurant.info.id}>
                    <RestaurantCard  resData={restaurant}/>
                    </Link>
                ))}       
            </div>
        </div>
    );
};
export default Body;