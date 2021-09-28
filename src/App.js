import { BrowserRouter, Route } from 'react-router-dom';
import Login from './page/Login';
import Main from './page/Main';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" exact component={Main} />
    </BrowserRouter>
  );
}

export default App;
