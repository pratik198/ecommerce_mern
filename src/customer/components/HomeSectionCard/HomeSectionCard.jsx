import React from "react";
import { lengha_page1 } from "../../../Data/Women/LenghaCholi";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="curser-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rm] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.imageUrl}
          alt={product}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-grey-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-grey-500">
          Men Solid Cotton Straight Kurta
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
