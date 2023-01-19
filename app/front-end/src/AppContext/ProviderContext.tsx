import React, { createContext, useState } from 'react';

export type PropsAppContext = {
  clientListPageComponent: string;
  setClientListPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
  clientListPageComponent: '',
  setClientListPageComponent: () => {},
}

interface CyclesContextProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<PropsAppContext>(DEFAULT_VALUE);

const ProviderContext = ({ children }: CyclesContextProviderProps) => {
  const [clientListPageComponent, setClientListPageComponent] = useState(DEFAULT_VALUE.clientListPageComponent);

  const contextValue = {
    clientListPageComponent,
    setClientListPageComponent,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { ProviderContext };
export default AppContext;