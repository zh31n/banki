import React from "react";

type Props = {};

const HomePageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ marginTop: "20px" }} className="container">
      {children}
    </main>
  );
};

export default HomePageWrapper;
