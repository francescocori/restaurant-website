import React, { useState, useEffect } from "react";
import "./style.css";
import CardCommunity from "../../Components/CardCommunity";
import communityData from "../../Data/CommunityData";

const Community = () => {
  // const [offsetY, setOffsetY] = useState(0);
  // const [show, setShow] = useState(false);

  // //calculate scroll
  // const handleScroll = () => {
  //   setOffsetY(window.pageYOffset);
  //   if (offsetY > 200) {
  //     setShow(true);
  //     console.log("over 200");
  //   } else if (offsetY < 200) {
  //     setShow(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   console.log("show", show);
  //   if (show) {
  //   }
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [show]);

  // const boxes = document.querySelectorAll(".box");
  // const high = window.innerHeight;
  // const HandleScroll = () => {
  //   if (offsetY > 200) {
  //     setShow(true);
  //   } else if (offsetY < 200) {
  //     setShow(false);
  //   }
  // };
  // const HandleScroll = () => {
  //   // const triggerBottom = (window.innerHeight / 5) * 4;
  //   const triggerBottom = 300;
  //   boxes.forEach((box) => {
  //     const boxTop = box.getBoundingClientRect().top;
  //     if (boxTop < triggerBottom) {
  //       box.className.add("show");
  //     } else {
  //       box.className.remove("show");
  //     }
  //   });
  // };

  return (
    <div className="community-section" id="community">
      <h2>
        meet our <br />
        <span>community</span>
      </h2>
      <button className="main-button">know more</button>
      <p className="community-text">
        Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
      </p>
      {/* <h2>{offsetY}</h2> */}

      {communityData.map((card) => {
        return (
          <div className="row">
            <CardCommunity key={card.id} {...card} />
          </div>
        );
      })}
    </div>
  );
};

export default Community;
