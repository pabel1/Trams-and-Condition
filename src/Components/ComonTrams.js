import React from "react";

const ComonTrams = ({ data }) => {


  return (
    <>
      {data &&(
        <div className=" py-6  px-8  space-y-4 text-zinc-800">
          <h2 className="  text-xl  font-bold">{data.title} </h2>
          {data.desc && data.desc.map((item, i) => (
            <p className="text-left " key={i}>
              {item.description}
            </p>
          ))}
          
        </div>
      )}
    </>
  );
};

export default ComonTrams;
