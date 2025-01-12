import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import courseImage from "../assets/png/sample-1.png"; // Replace with your image import

const CourseCard = () => {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img src={courseImage} className="card-img-top" alt="Course" />
      <div className="card-body">
        <span className="badge bg-warning text-dark mb-2">DESIGN</span>
        <h5 className="card-title text-truncate">
          Machine Learning A-Z™: Hands-On Python & R In Data...
        </h5>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-danger fw-bold fs-5">$57</span>
          <div className="d-flex align-items-center">
            <span className="me-2">★ 5.0</span>
            <span className="text-muted">265.7K students</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseGrid = () => {
  const cards = Array.from({ length: 8 }); // Array to hold 8 cards

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {cards.map((_, index) => (
          <div className="col-md-3" key={index}>
            <CourseCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
