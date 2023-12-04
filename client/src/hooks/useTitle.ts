import React from "react";
import { TitleContext } from "../contexts/titleContext";

const useTitle = () => {
  const context = React.useContext(TitleContext);
  if (context === undefined) {
    throw new Error(`useTitle must be used within a TitleProvider`);
  }
  return context;
};

export default useTitle;
