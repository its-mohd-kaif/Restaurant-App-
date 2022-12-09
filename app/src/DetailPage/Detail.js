import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { detailContext } from "../App";
import "./Detail.css";

function Detail() {
  // Import UseConext
  const details = useContext(detailContext);

  return (
    <div>
      <div className="backBtnDiv">
        <Link to={"/Main"}>
          <button className="backBtn">Back</button>
        </Link>
      </div>
      <center>
        {/* Display Data Using Map */}
        {details.detail.map((val, index) => (
          <div key={index} className="detailContainer">
            <h1>{val.name}</h1>
            <hr></hr>
            <div>
              <img className="detailImg" src={val.photograph} alt="" />
            </div>
            <br></br>
            <div>
              <h3>
                <span style={{ fontWeight: "bolder" }}> Neighborhood : </span>
                {val.neighborhood}
              </h3>
            </div>
            <br></br>
            <div>
              <h3>
                <span style={{ fontWeight: "bolder" }}>Address : </span>
                {val.address}
              </h3>
            </div>
            <br></br>
            <div>
              <h3>
                <span style={{ fontWeight: "bolder" }}>Cuisine : </span>{" "}
                {val.cuisine_type}
              </h3>
            </div>
            <br></br>
            <div>
              <h4>
                <span style={{ fontWeight: "bolder" }}>Operating Hours</span>
                <br></br>
                {Object.keys(val.operating_hours).map((val1, index) => (
                  <div key={index}>{val1}</div>
                ))}
              </h4>
            </div>
            <br></br>
            <div>
              <h4>
                <span style={{ fontWeight: "bolder" }}>Reviews</span>
                <br></br>
                {val.reviews.map((val, index) => (
                  <div key={index}>
                    <div>{val.name}</div>
                    <div>{val.date}</div>
                    <div>{val.rating}</div>
                    <div>{val.comments}</div>
                    <hr></hr>
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
