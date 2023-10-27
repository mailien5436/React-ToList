import './App.css';
import HomePage from './pages/homepage';
import store from './store';
import { Provider } from 'react-redux';
import './bootstrap-5.2.3/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>    
  );
}

export default App;
