import React from "react";
import buttondata from "../db/button.json";

const Skeleton = ({}) => {
  return (
    <div>
      {buttondata.map((category, index) => (
        <div key={index}>
          <h2>{category.label}</h2>
          <p>{category.description}</p>
          <div className="flex gap-5 mt-5">
            {category.buttons.map((button, buttonIndex) => (
              <button key={buttonIndex} className={button.class} disabled>
                Button
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
