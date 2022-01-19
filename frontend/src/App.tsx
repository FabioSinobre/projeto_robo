import Routes from './router';
import {BrowserRouter as Router} from 'react-router-dom'
import store from '../src/store/';
import {Provider} from 'react-redux';

function App() {
  return (
   <Provider store = {store}>
      <Router>
      <div><Routes /></div>
    </Router>
   </Provider>
    
  );
}
export default App;
