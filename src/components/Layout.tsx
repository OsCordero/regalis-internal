import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
