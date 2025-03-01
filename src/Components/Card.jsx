import React from "react";

export const Card = ({name, price, myFunc}) => {
    myFunc(4)
    return (
      <div className="block">
        <div>{name}</div>
        <div>{price}</div>
      </div>
  );
};
