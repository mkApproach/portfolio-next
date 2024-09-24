import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TabContextType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const TabContext = createContext<TabContextType | null>(null);

export const useTabContext = () => useContext(TabContext) as TabContextType;

interface TabProviderProps {
  children: ReactNode;
}

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>("1");

  return (
    <TabContext.Provider value={{ value, setValue }}>
      {children}
    </TabContext.Provider>
  );
};
