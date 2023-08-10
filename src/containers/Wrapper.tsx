import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default Wrapper;
