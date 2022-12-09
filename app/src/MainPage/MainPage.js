import React, { useContext, useState } from "react";
import "./MainPage.css";
import { Data } from "../test";
import { detailContext, noteContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
function MainPage() {
  // UseState For Input Box
  const [input, setInput] = useState("");
  // Import Usecontext
  const item = useContext(noteContext);
  const details = useContext(detailContext);
  // Import UseNavigate
  let navigate = useNavigate();
  // Input Handle Function
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  function searchData(params) {
    let tempArr = [];
    if (input === "") {
      alert("Type Something...");
      document.getElementById("input").focus();
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
  }

  // Search Handel Function
  const searchHandler = () => {
    searchData();
  };

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      searchData();
    }
  };

  // View More Handler
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
          <input
            id="input"
            autoFocus
            value={input}
            onChange={inputHandler}
            className="searchInput"
            onKeyDown={keyHandler}
          />
          <button onClick={searchHandler} className="searchBtn">
            Search
          </button>
        </div>
      </center>
      <center>
        {item.restaurant.map((val ,index) => (
          <div key={index} className="resturantDiv">
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
