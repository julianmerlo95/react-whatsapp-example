import React from 'react';
import Whatsapp from './containers/Whatsapp';
import Hoc from './hoc/hoc';

function App() {
  return (
    <Hoc>
      <Whatsapp />
    </Hoc>
  );
}

export default App;
