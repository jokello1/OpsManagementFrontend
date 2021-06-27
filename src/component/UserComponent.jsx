import React from "react";
import UserService from "../services/UserService";
import { Button } from '@material-ui/core';

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      users: [],
    };
    this.addUser = this.addUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  componentDidMount() {
    UserService.getUsersByDepartmentId(this.state.id).then((response) => {
      this.setState({ users: response.data });
    });
  }
  addUser() {
    this.props.history.push("/createUsers/" + this.state.id);
  }
  updateUser(id) {
    this.props.history.push("/updateUser/" + id);
  }
  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      const data = this.state.users.filter(i => i.id !== id)
      this.setState({users: data})
      this.props.history.push("/users/" + this.state.id);
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Users List</h1>
        <div className="row">
          <Button variant="contained" color="primary" className="btn btn-primary" onClick={this.addUser}>
            Add User
          </Button>
        </div>
        <table className="table table-stripped table-bordered">
          <thead>
            <tr>
              <th>User Id</th>
              <th>User Name</th>
              <th>User Phone</th>
              <th>User Date of Birth</th>
              <th>User Email</th>
              <th>User profession</th>
              <th>User creationDate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {this.state.users.map((u) => (
              
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.phone}</td>
                <td>{u.dateOfBirth}</td>
                <td>{u.email}</td>
                <td>{u.profession}</td>
                <td>{u.creationDate}</td>
                <td>
                  
                    <button
                      onClick={() => this.updateUser(u.id)}
                      className="btn btn-info"
                    >
                      update
                    </button>
                  
                    <button
                      onClick={() => this.deleteUser(u.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default UserComponent;
