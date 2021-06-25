import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import UserComponent from "./component/UserComponent";
import DepartmentComponent from "./component/DepartmentComponet";
import HeaderComponent from "./component/HeaderComponent";
import CreateUserComponent from "./component/CreateUserComponent";
import CreateDepartmentComponent from "./component/CreateDepartmentComponent";
import UpdateDepartmentComponent from "./component/UpdateDepartmentComponent";
import UpdateUserComponent from "./component/UpdateUserComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="row">
          <HeaderComponent />
        </div>
        <div className="container">
          <Switch>
            <Route path="/" exact component={DepartmentComponent}></Route>
            <Route path="/users/:id" component={UserComponent}></Route>
            <Route
              path="/createUsers/:id"
              component={CreateUserComponent}
            ></Route>
            <Route
              path="/updateDepartment/:id"
              component={UpdateDepartmentComponent}
            ></Route>
            <Route
              path="/updateUser/:id"
              component={UpdateUserComponent}
            ></Route>
            <Route
              path="/createDepartment"
              component={CreateDepartmentComponent}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
