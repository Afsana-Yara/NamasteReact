import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {MENU_URL} from "../utils/constants";

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null);

    // const params=useParams();
    // console.log(params);

    const {resId}=useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async ()=>{
        const data= await fetch(MENU_URL+resId);
        const json= await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    if(resInfo===null){
        return <shimmer/>;
    }

    const {name, cuisines, costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    return (
        <div>
            <h1>{name}</h1>
            <p>
                {cuisines}- {costForTwoMessage}
            </p>

            <h2>Menu</h2>

            <ul>
            {itemCards.map((item)=> <li>{item.card.info.name}- Rs {item.card.info.price/100 || item.card.info.defaultprice/100}</li>)}
            </ul>

        </div>
    );

};

export default RestaurantMenu;