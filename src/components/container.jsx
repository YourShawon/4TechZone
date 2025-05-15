import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-4 md:px-6">
      {children}
    </div>
  );
};

export default Container;
