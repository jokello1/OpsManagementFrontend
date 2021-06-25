import React from "react";
import PropTypes from "prop-types";
import DepartmentService from "../services/DepartmentService";

class CreateDepartmentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
    this.changeNamesHandler = this.changeNamesHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.saveDepartment = this.saveDepartment.bind(this);
  }
  changeNamesHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeDescriptionHandler = (event) => {
    this.setState({ description: event.target.value });
  };
  cancel() {
    this.props.history.push("/department");
  }
  saveDepartment = (e) => {
    e.preventDefault();
    let department = {
      name: this.state.name,
      description: this.state.description,
    };
    console.log("Department =>" + JSON.stringify(department));

    DepartmentService.createDepartment(department).then((res) => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Department</h3>
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
                    <label>Description</label>
                    <input
                      placeholder="description.."
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.changeDescriptionHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveDepartment}
                  >
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

CreateDepartmentComponent.propTypes = {};

export default CreateDepartmentComponent;
