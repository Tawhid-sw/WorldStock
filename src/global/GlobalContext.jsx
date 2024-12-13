import { createContext, useEffect, useState } from "react";

export const DataProvider = createContext();
export const Providers = ({ children }) => {
  const [type, setType] = useState(() => {
    const Type = localStorage.getItem("mediyaType");
    return Type ? JSON.parse(Type) : "Photos";
  });
  useEffect(() => {
    localStorage.setItem("mediyaType", JSON.stringify(type));
  }, [type]);

  const StoreData = { type, setType };
  return (
    <DataProvider.Provider value={StoreData}>{children}</DataProvider.Provider>
  );
};
