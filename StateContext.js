import React, { useState, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [total, setTotal] = useState(0);
  return (
    <StateContext.Provider value={[total, setTotal]}>
      {props.children}
    </StateContext.Provider>
  );
};
