import React from "react";
import CategoryCard from "./CategoryCard";
import LabelIcon from "../assets/svg/cpu-icon.svg";

const Categories = () => {
  return (
    <div className="container py-5">
      <div className="row g-3">
        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
          <CategoryCard
            icon={LabelIcon}
            label="Label"
            courses="63,476"
            bgColor="#f4f5fc"
            iconBgColor="#ffffff"
          />
        </div>
        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
          <CategoryCard
            icon={LabelIcon}
            label="Label"
            courses="63,476"
            bgColor="#f4f5fc"
            iconBgColor="#ffffff"
          />
        </div>
        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
          <CategoryCard
            icon={LabelIcon}
            label="Label"
            courses="63,476"
            bgColor="#f4f5fc"
            iconBgColor="#ffffff"
          />
        </div>
        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
          <CategoryCard
            icon={LabelIcon}
            label="Label"
            courses="63,476"
            bgColor="#f4f5fc"
            iconBgColor="#ffffff"
          />
        </div>
       
        {/* Add more cards here */}
      </div>
    </div>
  );
};

export default Categories;
