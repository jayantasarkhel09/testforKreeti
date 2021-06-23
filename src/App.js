import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import formBasic from './component/formBasic';
import Landing from './component/landing';
// import  Landing  from './component/landing';


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={formBasic} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
