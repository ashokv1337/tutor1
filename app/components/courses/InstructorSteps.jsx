import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import instructorImage from "../assets/png/instructor.png"; // Adjust the path to the image file

export const BecomeInstructor = ({ title, description, buttonText, onClick }) => {
    return (
      <div
        className="d-flex align-items-center justify-content-start p-4"
        style={{
          backgroundImage: `url(${instructorImage})`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          borderRadius: "8px",
          height: "250px",
          color: "white",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#FF5722", // Fallback background color
        }}
      >
        <div
          style={{
            maxWidth: "60%",
          }}
        >
          <h1 className="fw-bold mb-3">{title}</h1>
          <p className="mb-4" style={{ fontSize: "1.1rem" }}>
            {description}
          </p>
          <button
            className="btn px-4 py-2"
            style={{
              backgroundColor: "#FFFFFF",
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              color: "#FF5722",
            }}
            onClick={onClick}
          >
            {buttonText} <span>&rarr;</span>
          </button>
        </div>
      </div>
    );
  };
  
  // TeachingSteps Component
  export const TeachingSteps = ({ title, steps }) => {
    return (
      <div className="p-4" style={{ backgroundColor: "#FFFFFF", borderRadius: "8px", height: "100%" }}>
        <h3 className="fw-bold text-start mb-4">{title}</h3>
        <div className="row text-start">
          {steps.map((step, index) => (
            <div
              key={index}
              className="col-md-6 d-flex align-items-center justify-content-start mb-3"
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: step.backgroundColor,
                  color: step.textColor,
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </div>
              <p className="mb-0">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

// export default TeachingSteps;
