import './App.css';
import EndpointWrapper from './sections/endpointWrapper';
import Tabbed from './sections/tabbed';

const App = () => {
  return (
    <div className={'container'}>
      <EndpointWrapper />
      <Tabbed />
    </div>
  );
};

export default App;
