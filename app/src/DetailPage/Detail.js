import React, { useContext } from "react";
import { detailContext } from "../App";
import "./Detail.css";

function Detail() {
  const details = useContext(detailContext);
  console.log("Details", details.detail);
  return (
    <div>
      <center>
        <p>Detail Page</p>
        {details.detail.map((val) => (
          <div>
            <h1>{val.name}</h1>
            <div>
              <img className="detailImg" src={val.photograph} alt="" />
            </div>
            <div>
              <h3>Neighborhood => {val.neighborhood}</h3>
            </div>
            <div>
              <h3>Address => {val.address}</h3>
            </div>
            <div>
              <h3>Cuisine => {val.cuisine_type}</h3>
            </div>
            <div>
              <h4>
                Operating Hours =>
                {Object.keys(val.operating_hours).map((val1) => (
                  <div>{val1}</div>
                ))}
              </h4>
            </div>
            <div>
              <h4>
                Review =>
                {val.reviews.map((val) => (
                  <div>
                    <div>{val.name}</div>
                    <div>{val.date}</div>
                    <div>{val.rating}</div>
                    <div>{val.comments}</div>
                  </div>
                ))}
              </h4>
            </div>
          </div>
        ))}
      </center>
    </div>
  );
}

export default Detail;
