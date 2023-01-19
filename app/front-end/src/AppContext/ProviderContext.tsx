import React, { createContext, useState } from 'react';

export type PropsAppContext = {
  clientListPageComponent: string;
  currentClientId: string;
  setClientListPageComponent: React.Dispatch<React.SetStateAction<string>>;
  setCurrentClientId: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
  clientListPageComponent: '',
  currentClientId: '',
  setClientListPageComponent: () => {},
  setCurrentClientId: () => {},
}

interface CyclesContextProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<PropsAppContext>(DEFAULT_VALUE);

const ProviderContext = ({ children }: CyclesContextProviderProps) => {
  const [clientListPageComponent, setClientListPageComponent] = useState(DEFAULT_VALUE.clientListPageComponent);
  const [currentClientId, setCurrentClientId] = useState(DEFAULT_VALUE.clientListPageComponent);

  const contextValue = {
    clientListPageComponent,
    setClientListPageComponent,
    currentClientId,
    setCurrentClientId,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { ProviderContext };
export default AppContext;