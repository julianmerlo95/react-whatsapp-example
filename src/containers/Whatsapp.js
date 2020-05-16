import React from 'react';
import Layout from '../components/layout/Layout';
import { ContextProvider } from '../context/Context';

function Whatsapp() {
  return (
    <>
      <ContextProvider>
        <Layout />
      </ContextProvider>
    </>
  );
}

export default Whatsapp;
