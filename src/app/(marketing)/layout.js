import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const MarketingLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-6">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
