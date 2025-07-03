import React from "react";

const Heading = (props) => {
  return (
    <div className=" w-fit mx-auto">
      <h2 className="md:text-5xl text-[2.5rem] font-bold ">
        <span className="text-red-500">{props.highlight}</span> {props.heading}
      </h2>
      <div className="w-35 h-1 bg-rose-300 md:mt-5 md:ml-auto mt-3"></div>
    </div>
  );
};

export default Heading;
