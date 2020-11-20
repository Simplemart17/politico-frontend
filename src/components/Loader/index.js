import React from 'react';
import { RingLoader, PulseLoader } from 'react-spinners';

export const ButtonSpinner = () => (
  <PulseLoader
    sizeUnit={'px'}
    size={8}
    margin={2}
    color={'#4d7b51'}
  />
);

const ContentLoader = () => (
  <RingLoader
    sizeUnit={'px'}
    size={150}
    color={'#4d7b51'}
  />
);

export default ContentLoader;
