import React, { useState } from 'react';

import WallContext from './wallcontext'

const { Provider } = WallContext;

function WallProvider({ children }) {
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');

  const value = {
    user, setUser,
    token, setToken,
  };

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
}

export default WallProvider