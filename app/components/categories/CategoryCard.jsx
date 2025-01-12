import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoryCard = ({ icon, label, courses, bgColor = "#f4f5fc", iconBgColor = "#ffffff" }) => {
  return (
    <div
      className="card border-0 shadow-sm d-flex align-items-center"
      style={{
        backgroundColor: bgColor,
        borderRadius: "8px",
        padding: "12px",
        height: "80px",
        display: "flex",
        flexDirection: "row",
        gap: "12px", // Space between the icon and the text
        width: "250px",
      }}
    >
      {/* Icon Container */}
      <div
        style={{
          backgroundColor: iconBgColor,
          borderRadius: "8px",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={icon} alt={`${label} icon`} style={{ width: "24px", height: "24px" }} />
      </div>

      {/* Text Section */}
      <div className="d-flex flex-column justify-content-center">
        <h6 className="mb-0" style={{ fontSize: "14px", fontWeight: "600" }}>
          {label}
        </h6>
        <p className="text-muted small mb-0" style={{ fontSize: "12px" }}>
          {courses} Courses
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
