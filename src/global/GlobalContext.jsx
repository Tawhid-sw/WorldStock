import { createContext, useEffect, useState } from "react";

export const DataProvider = createContext();
export const Providers = ({ children }) => {
  const [mediyaType, setMediyaType] = useState(() => {
    const Type = localStorage.getItem("mediyaType");
    return Type ? JSON.parse(Type) : "Photos";
  });
  useEffect(() => {
    localStorage.setItem("mediyaType", JSON.stringify(mediyaType));
  }, [mediyaType]);

  const StoreData = { mediyaType, setMediyaType };
  return (
    <DataProvider.Provider value={StoreData}>{children}</DataProvider.Provider>
  );
};
