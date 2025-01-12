import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import userImage from "../assets/png/user.png"; // User profile path

const HoverPopup = ({
  category,
  title,
  instructorName,
  price,
  oldPrice,
  discount,
  rating,
  students,
  level,
  duration,
  learnings,
}) => {
  return (
    <div className="card shadow-sm" style={{ maxWidth: "100%", borderRadius: "8px" }}>
      <div className="card-body">
        {/* Category */}
        <span className="badge bg-primary text-light mb-3">{category}</span>

        {/* Title */}
        <h5 className="card-title text-truncate" title={title}>
          {title}
        </h5>

        {/* Instructor and Rating */}
        <div className="d-flex align-items-center mb-3">
          <img
            src={userImage}
            alt="Instructor"
            className="rounded-circle me-2"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <small className="text-muted">Course by</small>
            <p className="mb-0">{instructorName}</p>
          </div>
          <div className="ms-auto d-flex align-items-center">
            <span className="text-warning me-1">★ {rating}</span>
            <small className="text-muted">(357,914)</small>
          </div>
        </div>

        {/* Stats: Students, Level, Duration */}
        <div className="d-flex justify-content-between text-muted mb-3">
          <span>
            <i className="bi bi-people-fill me-1"></i> {students} students
          </span>
          <span>
            <i className="bi bi-bar-chart-fill me-1"></i> {level}
          </span>
          <span>
            <i className="bi bi-clock-fill me-1"></i> {duration}
          </span>
        </div>

        {/* Pricing and Discount */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <span className="text-success fw-bold">${price}</span>
            <span className="text-muted text-decoration-line-through ms-2">${oldPrice}</span>
            <span className="badge bg-danger ms-2">{discount}% OFF</span>
          </div>
          <button className="btn btn-light text-danger p-1">
            <i className="bi bi-heart"></i>
          </button>
        </div>

        {/* What You'll Learn */}
        <div className="mb-3">
          <h6>WHAT YOU'LL LEARN</h6>
          <ul className="list-unstyled">
            {learnings.map((item, index) => (
              <li key={index} className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="d-flex flex-column">
          <button className="btn btn-warning text-white mb-2">Add To Cart</button>
          <button className="btn btn-light">Course Detail</button>
        </div>
      </div>
    </div>
  );
};

export default HoverPopup;
