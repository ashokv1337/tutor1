import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import instructorImage from "../assets/png/instructor.png";

const InstructorCard = ({ image, name, title, rating, students }) => {
    return (
      <div
        className="card text-center border-0"
        style={{
          width: "14rem", // Reduced width to better fit the content
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            height: "180px", // Adjusted height to maintain aspect ratio
            overflow: "hidden",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          <img
            src={instructorImage}
            alt={name}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover", // Ensures the image spans fully without padding
            }}
          />
        </div>
        <div className="card-body p-2">
          <h6 className="card-title mb-1 fw-bold" style={{ fontSize: "1rem" }}>
            {name}
          </h6>
          <p
            className="card-text text-muted mb-2"
            style={{ fontSize: "0.85rem" }}
          >
            {title}
          </p>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ fontSize: "0.85rem" }}
          >
            <span className="text-warning me-1">&#9733;</span>
            <span className="fw-bold me-2">{rating}</span>
            <span className="text-muted">{students} students</span>
          </div>
        </div>
      </div>
    );
  };
  export default InstructorCard