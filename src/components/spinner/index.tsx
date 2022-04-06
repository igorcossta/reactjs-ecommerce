import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './styles';

const Spinner: React.FC = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
