import React from "react";

const NestedComon = ({ data }) => {
  return (
    <>
      <div className=" py-6  px-8  space-y-4 text-zinc-800">
        <h2 className="  text-xl  font-bold">{data.title} </h2>
        <div className="text-left ">
          {data.mainDescription ? data.mainDescription : " "}
          <br />
          {data.bulletPoint &&
            data.bulletPoint.map((item, i) => (
              <div className=" ml-[8%] my-5 flex gap-4">
                <p>{item.bulletNumber}</p>
                <p className=" ">{item.bulletDescription}</p>
                {item.bulletconclusion ? item.bulletConclusion : " "}
                {item.subBullet && item.subBullet.map((subItem,i)=>(
                    <div className=" ml-[8%] my-5 ">
                    <p>
                      {subItem.subTitle}
                    </p>
                    <div className="ml-[4%]  my-5 flex gap-4">
                      <p>{subItem.number}</p>
                      <p className=" ">
                        {subItem.subDesc}
                      </p>
                    </div>
                  </div>
                )) }
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default NestedComon;
