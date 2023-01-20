import React, { createContext, useState } from 'react';

export type PropsAppContext = {
  loginUsername: string;
  loginPassword: string;
  clientListPageComponent: string;
  currentClientId: string;
  setClientListPageComponent: React.Dispatch<React.SetStateAction<string>>;
  setCurrentClientId: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
  loginUsername: 'desafiosharenergy',
  loginPassword: 'sh@r3n3rgy',
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
  const [loginUsername, setLoginUsername] = useState(DEFAULT_VALUE.loginUsername);
  const [loginPassword, setLoginPassword] = useState(DEFAULT_VALUE.loginPassword);
  const [clientListPageComponent, setClientListPageComponent] = useState(DEFAULT_VALUE.clientListPageComponent);
  const [currentClientId, setCurrentClientId] = useState(DEFAULT_VALUE.clientListPageComponent);

  const contextValue = {
    loginUsername,
    setLoginUsername,
    loginPassword,
    setLoginPassword,
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