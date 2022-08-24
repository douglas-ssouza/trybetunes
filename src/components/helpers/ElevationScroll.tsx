import React from 'react';

import useScrollTrigger from '@mui/material/useScrollTrigger';

interface IProps {
  children: React.ReactElement;
}

function ElevationScroll({ children }: IProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default ElevationScroll;
