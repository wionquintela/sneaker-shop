import React from "react";
import Carousel from "./Carousel";
import MenShoeList from "../ShoesContent/Men/ShoeList";
import ShoeCard from "../ShoesContent/ShoeCard";

export default function Home(props) {
  // Function to get a random index within the range of MenShoeList
  function getRandomIndex(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  // Get a random index between 0 and the length of MenShoeList - 1
  const randomIndex = getRandomIndex(0, MenShoeList.length - 1);
  // Select the random shoe item based on the generated random index
  const randomShoe = MenShoeList[randomIndex];

  return (
    <>
      <div>
        {/* Carousel component */}
        <Carousel />
        <div style={{ paddingTop: "100px" }}>
          {/* Feature Shoe of the Day Title */}
          <h1 className="shopHeaderTitle ContentTitle text-center">
            Featured Shoes
          </h1>
          {/* Render the selected random ShoeCard */}
          <div className=" justify-content-center">
            <ShoeCard {...randomShoe} />
          </div>
        </div>
      </div>
    </>
  );
}
