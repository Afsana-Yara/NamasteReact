import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData}=props;
    const {name, avgRating, cuisines, cloudinaryImageId}=resData.info;
    return (
        <div className="resto-card">
            <div className="resto-logo">
            <img src={CDN_URL +cloudinaryImageId}></img>
            
            </div>
            <div className="resto-details">
                <h4>{name}</h4>
                <h4>{avgRating}</h4>
                <h4>{cuisines}</h4>
                <h4>{avgRating}</h4>
            </div>
        </div>
    )
}
export default RestaurantCard;