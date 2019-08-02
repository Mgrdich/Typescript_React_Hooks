import React from 'react';
import {Store} from './Store'

const App: React.FC = () => {
    const store = React.useContext(Store);
    console.log(store);
  return (
    <div>
      hello
    </div>
  );
};

export default App;
