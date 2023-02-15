import React, { useState } from "react";
import SelectComp from "./Select/SelectComp";

const SelectArea = () => {
  const flexDisplay = {
    display: "flex",
    border: "1px solid gray",
    overflow: "hidden",
    height: "100px",
  };
  return (
    <div style={flexDisplay}>
      <SelectComp overflow={false} />
      <SelectComp overflow={true} />
    </div>
  );
};

export default SelectArea;
