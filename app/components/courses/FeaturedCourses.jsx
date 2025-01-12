import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import courseImage from "../assets/png/sample-1.png";
import userImage from "../assets/png/user.png"; // Replace with your course image import

const FeaturedCourseCard = ({ courseImg, category, title, userImg, userName, price, oldPrice, rating, students, level, duration }) => {
  return (
    <div className="card shadow-sm" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        {/* Image Section */}
        <div className="col-md-4">
          <img
            src={courseImg}
            alt="Course"
            className="img-fluid h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            {/* Price and Category Tag in One Row */}
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-success text-light">{category}</span>
              <div>
                <span className="text-success fw-bold me-2">${price}</span>
                <span className="text-muted text-decoration-line-through">${oldPrice}</span>
              </div>
            </div>

            {/* Title */}
            <h5 className="card-title text-truncate mb-2" title={title}>
              {title}
            </h5>

            {/* Instructor Info */}
            <div className="d-flex align-items-center mb-2">
              <img
                src={userImg}
                alt="Instructor"
                className="rounded-circle me-2"
                style={{ width: "40px", height: "40px" }}
              />
              <span className="text-muted">{userName}</span>
            </div>

            {/* Rating */}
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center">
                <span className="text-warning me-1">★ {rating}</span>
                <span className="text-muted">(357,914)</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="d-flex justify-content-between text-muted">
              <div className="d-flex align-items-center">
                <i className="bi bi-people-fill me-1"></i> {students} students
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-bar-chart-fill me-1"></i> {level}
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-clock-fill me-1"></i> {duration}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedCourses = () => {
  const courses = [
    {
      courseImg: courseImage,
      category: "HEALTH & FITNESS",
      title: "Investing In Stocks The Complete Course! (13 H...)",
      userImg: userImage,
      userName: "Kevin Gilbert",
      price: 14.0,
      oldPrice: 26.0,
      rating: 5.0,
      students: "265.7K",
      level: "Beginner",
      duration: "6 hours",
    },
    {
        courseImg: courseImage,
        category: "HEALTH & FITNESS",
        title: "Investing In Stocks The Complete Course! (13 H...)",
        userImg: userImage,
        userName: "Kevin Gilbert",
        price: 14.0,
        oldPrice: 26.0,
        rating: 5.0,
        students: "265.7K",
        level: "Beginner",
        duration: "6 hours",
      },
      {
        courseImg: courseImage,
        category: "HEALTH & FITNESS",
        title: "Investing In Stocks The Complete Course! (13 H...)",
        userImg: userImage,
        userName: "Kevin Gilbert",
        price: 14.0,
        oldPrice: 26.0,
        rating: 5.0,
        students: "265.7K",
        level: "Beginner",
        duration: "6 hours",
      },
      {
        courseImg: courseImage,
        category: "HEALTH & FITNESS",
        title: "Investing In Stocks The Complete Course! (13 H...)",
        userImg: userImage,
        userName: "Kevin Gilbert",
        price: 14.0,
        oldPrice: 26.0,
        rating: 5.0,
        students: "265.7K",
        level: "Beginner",
        duration: "6 hours",
      },
      {
        courseImg: courseImage,
        category: "HEALTH & FITNESS",
        title: "Investing In Stocks The Complete Course! (13 H...)",
        userImg: userImage,
        userName: "Kevin Gilbert",
        price: 14.0,
        oldPrice: 26.0,
        rating: 5.0,
        students: "265.7K",
        level: "Beginner",
        duration: "6 hours",
      },
    // Repeat similar objects for 3 more courses
  ];

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {courses.map((course, index) => (
          <div className="col-lg-6 col-md-6" key={index}>
            <FeaturedCourseCard {...course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
