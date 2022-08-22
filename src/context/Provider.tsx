import React, { ReactNode, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Context from '.';

interface IProps {
  children: ReactNode,
}

function Provider({ children }: IProps) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    description: '',
    image: '',
  });

  const contextValue = useMemo(() => ({
    user,
    setUser,
  }), [user]);

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
