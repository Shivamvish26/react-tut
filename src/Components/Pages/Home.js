/* eslint-disable no-unused-vars */


import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../Chatbot/Config";
import MessageParser from "../Chatbot/MessageParser";
import ActionProvider from "../Chatbot/ActionProvider";

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
      <div>

      </div>
    </div>
  );
};

export default Home;
