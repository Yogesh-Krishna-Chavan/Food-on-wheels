import { CDN_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-400"
    >
      <img
        className="rounded-lg"
        alt="res-image"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;
