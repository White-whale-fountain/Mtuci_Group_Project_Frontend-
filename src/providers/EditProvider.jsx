import { createContext, useContext, useEffect, useState } from "react";
export const EditContext = createContext({ modalActive: false });
export const EditProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <EditContext.Provider value={{ modalActive, setModalActive }}>
      {children}
    </EditContext.Provider>
  );
};
