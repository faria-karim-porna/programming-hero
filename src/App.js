import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Movies from './Components/Movies/Movies';
import Seats from './Components/Seats/Seats';
import AddFakeData from './Components/AddFakeData/AddFakeData';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();
function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/movies">
            <Movies></Movies>
          </PrivateRoute>
          <Route path="/seats/:id">
            <Seats></Seats>
          </Route>
          <Route path = "/addFakeData">
            <AddFakeData></AddFakeData>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
