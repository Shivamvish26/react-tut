import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  // Use Navigate code with direct function calling and we can do with the help of conditional navigation

  const location = useLocation();
  console.log(location)

  const navigate = useNavigate();
  const navpage = (url) => {
    navigate(url);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button className="mr-3" onClick={() => navpage("/about")}>
          Go to About page
        </button>
        <button onClick={() => navpage("/searchparam")}>
          Go to Filter page
        </button>
      </div>
    </div>
  );
};

export default Home;
