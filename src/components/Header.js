import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    console.log("Use_Effect Called");
  }, []);

  //Subscribing o the store uing selectors

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-2x">
      <div>
        <Link to="/">
          <img className="w-52" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-6">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-6">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-6">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-6">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-6 font-bold">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className="bg-green-300 px-6 py-2 rounded-md"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-6 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
