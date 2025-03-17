import Input from "@/components/ui/Input";
import React from "react";

function Shop() {
  return (
    <>
      <h1 className="text-left text-2xl w-full mt-5 text-secondary">
        Shop The Latest
      </h1>
      <div className="flex justify-center grow mt-4">
        <div className="w-60">
          <Input className="w-full" placeholder="Search..." />
        </div>
        <div className="w-100 grow! bg-red-400"></div>
      </div>
    </>
  );
}

export default Shop;
