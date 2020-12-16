import { Route } from 'react-router';
import './App.css';
import Loader from './Components/Loader/Loader';
import Home from './Containers/Home/Home';

function App() {
  return (
    <div>
      <Loader />
      <Route path = "/" component = {Home} />
    </div>
  );
}

export default App;
