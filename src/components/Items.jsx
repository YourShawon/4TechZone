import Image from "next/image";
import React from "react";
import itemsImage from "../../public/image.png"


const Items = ({ CompItmes }) => {
  return (
    <div className="flex items-start gap-[30px]">
      <div>
        <Image src={CompItmes.icon} width={200} height={200} alt="Image"></Image>
      </div>
      <div>
        <h3 className="font-bold pb-[12px] md:text-[26px] text-[18px]">{CompItmes.name}</h3>
        <p className="text-[14px] md:text-[16px]">{CompItmes.description}</p>
      </div>
    </div>
  );
};

export default Items;
