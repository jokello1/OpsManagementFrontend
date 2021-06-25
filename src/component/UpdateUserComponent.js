import React from "react";
import PropTypes from "prop-types";
import UserService from "../services/UserService";

class UpdateUserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      phone: "",
      dob: "",
      email: "",
      profession: "",
      departmentId: "",
    };
    this.changeNamesHandler = this.changeNamesHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeProfessionHandler = this.changeProfessionHandler.bind(this);
    this.changeDobHandler = this.changeDobHandler.bind(this);
    this.updateUser = this.updateUser.bind(this);
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
    this.props.history.push("/users/" + this.state.departmentId);
  }
  componentDidMount() {
    UserService.getById(this.state.id).then((res) => {
      let user = res.data;
      this.setState({
        names: user.name,
        phone: user.phone,
        dob: user.dateOfBirth,
        email: user.email,
        profession: user.profession,
        departmentId: user.departmentId,
        creationDate: user.creationDate,
      });
    });
  }
  updateUser = (e) => {
    e.preventDefault();
    let user = {
      id: this.state.id,
      name: this.state.names,
      phone: this.state.phone,
      dateOfBirth: this.state.dob,
      email: this.state.email,
      profession: this.state.profession,
      departmentId: this.state.departmentId,
      creationDate: this.state.creationDate,
    };
    console.log("employee =>" + JSON.stringify(user));

    UserService.updateUser(user.id, user).then((res) => {
      console.log(res);
      this.props.history.push("/users/" + this.state.departmentId);
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update User</h3>
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
                  <div style={{ marginTop: "10px" }}></div>
                  <button className="btn btn-success" onClick={this.updateUser}>
                    Update
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

UpdateUserComponent.propTypes = {};

export default UpdateUserComponent;
