import React from 'react';

import { UserContext, contextInitialValue } from './UserContext';

interface UserContextProps {
  children: React.ReactNode;
}

function Provider({ children }: UserContextProps) {
  const [user, setUser] = React.useState(contextInitialValue.user);

  const contextValue = React.useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContext.Provider value={contextValue}>
      { children }
    </UserContext.Provider>
  );
}

export default Provider;
