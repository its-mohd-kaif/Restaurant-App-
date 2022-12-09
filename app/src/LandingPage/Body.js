import React from "react";
import img2 from "../banner.jpg";
import img3 from "../disc1.png";
import img4 from "../disc2.png";
import TransitionsModal from "./Popup";

function Body() {
  return (
    <div>
      {/* Import Model */}
      <TransitionsModal />
      <div className="bannerDiv">
        <img className="banner" src={img2} alt="banner" />
      </div>
      <div>
        <div className="bodyHead">
          <h2>Our most popular deals</h2>
        </div>
        <div className="rowBody">
          <div className="column1Body">
            <img className="discountImg" src={img3} alt="banner" />
          </div>
          <div className="column2Body">
            <img className="discountImg" src={img4} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
