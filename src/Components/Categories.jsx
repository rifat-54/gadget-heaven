import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ category }) => {

  return (
    <div className="flex justify-center w-full mx-auto gap-5">
      <div role="tablist" className="tabs tabs-lifted flex flex-wrap text-center">
        {category.map((cat,idx) => (
          <NavLink
            key={idx}
            to={`/category/${cat.category}`}
            role="tab"
            className={({ isActive }) => `tab text-xl font-bold ${isActive ? "tab-active" : ""}`}
          >
            {cat.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
