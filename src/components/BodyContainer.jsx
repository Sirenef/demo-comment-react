import React from "react";
import FilterCmt from "./FilterCmt";
import ListCmt from "./ListCmt";

const BodyContainer = () => {
  return (
    <div className="font-sans">
      <FilterCmt></FilterCmt>
      <ListCmt></ListCmt>
    </div>
  );
};

export default BodyContainer;
