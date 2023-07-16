import React from "react";
import "./portfolio.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="mainTitle">Our Works</h1>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
