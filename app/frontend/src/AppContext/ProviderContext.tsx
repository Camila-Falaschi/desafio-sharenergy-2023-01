import React, { createContext, useState } from 'react';

export type PropsAppContext = {
  loginUsername: string;
  loginPassword: string;
  isLogged: boolean;
  clientListPageComponent: string;
  currentClientId: string;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setClientListPageComponent: React.Dispatch<React.SetStateAction<string>>;
  setCurrentClientId: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
  loginUsername: 'desafiosharenergy',
  loginPassword: 'sh@r3n3rgy',
  isLogged: false,
  clientListPageComponent: '',
  currentClientId: '',
  setIsLogged: () => {},
  setClientListPageComponent: () => {},
  setCurrentClientId: () => {},
}

interface CyclesContextProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<PropsAppContext>(DEFAULT_VALUE);

const ProviderContext = ({ children }: CyclesContextProviderProps) => {
  const [loginUsername] = useState(DEFAULT_VALUE.loginUsername);
  const [loginPassword] = useState(DEFAULT_VALUE.loginPassword);
  const [isLogged, setIsLogged] = useState(DEFAULT_VALUE.isLogged);
  const [clientListPageComponent, setClientListPageComponent] = useState(DEFAULT_VALUE.clientListPageComponent);
  const [currentClientId, setCurrentClientId] = useState(DEFAULT_VALUE.clientListPageComponent);

  const contextValue = {
    loginUsername,
    loginPassword,
    isLogged,
    setIsLogged,
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