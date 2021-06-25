import React from "react";
import UserService from "../services/UserService";

class CreateUserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      dob: "",
      email: "",
      profession: "",
      departmentId: this.props.match.params.id,
    };
    this.changeNamesHandler = this.changeNamesHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeProfessionHandler = this.changeProfessionHandler.bind(this);
    this.changeDobHandler = this.changeDobHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
  changeNamesHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changePhoneHandler = (event) => {
    this.setState({ phone: event.target.value });
  };
  changeDobHandler = (event) => {
    this.setState({ dob: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeProfessionHandler = (event) => {
    this.setState({ profession: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }
  saveUser = (e) => {
    e.preventDefault();
    let users = {
      name: this.state.name,
      phone: this.state.phone,
      dateOfBirth: this.state.dob,
      email: this.state.email,
      profession: this.state.profession,
      departmentId: this.state.departmentId,
    };
    console.log("employee =>" + JSON.stringify(users));

    UserService.createUser(users).then((res) => {
      this.props.history.push("/users/" + this.state.departmentId);
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add User</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      placeholder="name"
                      name="names"
                      className="form-control"
                      value={this.state.names}
                      onChange={this.changeNamesHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      placeholder="071.."
                      name="phone"
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.changePhoneHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      placeholder="mm-dd-yy"
                      name="dob"
                      className="form-control"
                      value={this.state.dob}
                      onChange={this.changeDobHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      placeholder="email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Profession</label>
                    <input
                      placeholder="engineering"
                      name="profession"
                      className="form-control"
                      value={this.state.profession}
                      onChange={this.changeProfessionHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.saveUser}>
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;
