import React, { useContext, useState } from "react";
import "./MainPage.css";
import { Data } from "../test";
import { detailContext, noteContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
function MainPage() {
  const [input, setInput] = useState("");

  const item = useContext(noteContext);
  const details = useContext(detailContext);

  let navigate = useNavigate();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchHandler = () => {
    let tempArr = [];
    if (input === "") {
      alert("Type Something...");
    } else {
      let tempInput = input.toLowerCase();

      Data.restaurants.map((val, index) => {
        let tempResName = Data.restaurants[index].name.toLowerCase();
        let tempCuisine = Data.restaurants[index].cuisine_type.toLowerCase();
        let tempNeighborhood = Data.restaurants[
          index
        ].neighborhood.toLowerCase();

        if (
          tempResName.match(tempInput) ||
          tempCuisine.match(tempInput) ||
          tempNeighborhood.match(tempInput)
        ) {
          tempArr.push(val);
        }
      });
    }

    item.setRestaurant(tempArr);
    setInput("");
  };

  const viewMoreBtn = (value) => {
    let tempArr2 = [];
    tempArr2.push(value);
    details.setDetail(tempArr2);
    navigate("/Detail");
  };

  return (
    <div>
      <center>
        <div className="searchMainDin">
          <h1>Welcome to Yours Kitchen</h1>
          <input
            autoFocus
            value={input}
            onChange={inputHandler}
            className="searchInput"
          />
          <button onClick={searchHandler} className="searchBtn">
            Search
          </button>
        </div>
      </center>
      <center>
        {item.restaurant.map((val) => (
          <div className="resturantDiv">
            <div className="rowResCart">
              <div className="column1ResCart">
                <div>
                  <img className="imageRes" src={val.photograph} alt="" />
                </div>
              </div>
              <div className="column2ResCart">
                <div>
                  <h3>{val.name}</h3>
                </div>
                <div>
                  <h4>{val.cuisine_type}</h4>
                </div>
                <div>
                  <p>{val.address}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      viewMoreBtn(val);
                    }}
                    className="viewBtn"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </center>
    </div>
  );
}

export default MainPage;
