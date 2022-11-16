import * as ReactDOM from 'react-dom';
import './App.css';
import { Login, Form } from './components/LoginInputs.js';

function App() {
  return (
    <div>
      <Login />
      <Form />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
