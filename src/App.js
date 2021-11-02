import { BrowserRouter, Route } from 'react-router-dom';
import Join from './page/Join';
import Login from './page/Login';
import Main from './page/Main';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" exact component={Main} />
      <Route path="/join" exact component={Join} />
    </BrowserRouter>
  );
}

export default App;
