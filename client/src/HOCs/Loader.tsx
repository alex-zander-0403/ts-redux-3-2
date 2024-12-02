import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export default function Loader({ children, isLoading }): JSX.Element {
  return isLoading ? (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="black"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      wrapperClass=""
    />
  ) : (
    children
  );
}
