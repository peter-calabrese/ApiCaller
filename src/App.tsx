import { useState } from 'react';
import './App.css';
import EndpointWrapper from './sections/endpointWrapper';
import Tabbed from './sections/tabbed';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className={'container'}>
      <EndpointWrapper />
      <Tabbed />
    </div>
  );
};

export default App;
