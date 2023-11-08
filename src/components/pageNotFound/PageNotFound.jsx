import React from "react";

const PageNotFound = () => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    fontSize: "3rem",
  };

  return (
    <div style={styles}>
      Opps! Where are you looking for!! We cannot find the page!!{" "}
    </div>
  );
};

export default PageNotFound;
