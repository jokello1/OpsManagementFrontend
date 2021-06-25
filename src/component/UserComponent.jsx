import React from "react";
import UserService from "../services/UserService";

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
      this.props.history.push("/users/" + this.state.id);
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Users List</h1>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addUser}>
            Add User
          </button>
        </div>
        <table className="table table-stripped table-bordered">
          <thead>
            <tr>
              <td>User Id</td>
              <td>User Name</td>
              <td>User Phone</td>
              <td>User Date of Birth</td>
              <td>User Email</td>
              <td>User profession</td>
              <td>User creationDate</td>
              <td>Actions</td>
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
                  <td>
                    <button
                      onClick={() => this.updateUser(u.id)}
                      className="btn btn-info"
                    >
                      update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.deleteUser(u.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
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
