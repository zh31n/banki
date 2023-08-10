import React from "react";

const HomePageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ marginTop: "20px" }} className="container">
      {children}
    </main>
  );
};

export default HomePageContainer;
