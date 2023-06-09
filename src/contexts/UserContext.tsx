import React, { ReactNode, createContext, useState } from 'react';
import { UserType } from '../services/users';

export const UserContext = createContext(undefined as any);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>();

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
