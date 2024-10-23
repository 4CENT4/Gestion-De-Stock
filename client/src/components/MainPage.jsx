import React from "react";
import Lottie from "react-lottie";
import animationData from "../Design main page.json"; 
import "./styles/MainPage.css";

const MainPage = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="main-page">
   
      <div className="main-page__image">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      
      
      <div className="main-page__text">Gestion De Stock</div>
    </div>
  );
};

export default MainPage;
