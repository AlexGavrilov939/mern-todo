import React, { useMemo, useState } from "react";

interface TitleContextValue {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const TitleContext = React.createContext({} as TitleContextValue);
TitleContext.displayName = "TitleContext";

const TitleProvider: React.FC = (props) => {
  const [title, setTitle] = useState("");

  const value = useMemo(
    () => ({
      title,
      setTitle,
    }),
    [title, setTitle]
  );

  return <TitleContext.Provider value={value} {...props} />;
};

export { TitleContext, TitleProvider };
