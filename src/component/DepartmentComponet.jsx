import React from "react";
import PropTypes from "prop-types";
import DepartmentService from "../services/DepartmentService";

class DepartmentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
    };
    this.addDepartment = this.addDepartment.bind(this);
    this.departmentUsers = this.departmentUsers.bind(this);
    this.updateDepartment = this.updateDepartment.bind(this);
    this.deleteDepartment = this.deleteDepartment.bind(this);
  }
  componentDidMount() {
    DepartmentService.getDepartments().then((response) => {
      this.setState({ departments: response.data });
    });
  }
  addDepartment() {
    this.props.history.push("/createDepartment");
  }
  departmentUsers(id) {
    this.props.history.push("/users/" + id);
  }
  updateDepartment(id) {
    this.props.history.push("/updateDepartment/" + id);
  }
  deleteDepartment(id) {
    DepartmentService.deleteDepartment(id).then((res) => {
      this.props.history.push("/");
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Departments List</h1>
        <div className="row">
          <button className="btn btn-info" onClick={this.addDepartment}>
            Add Department
          </button>
        </div>
        <table className="table table-stripped">
          <thead>
            <tr>
              <td>Department Id</td>
              <td>Department Name</td>
              <td>Department description</td>
              <td>Department creationDate</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.state.departments.map((department) => (
              <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.name}</td>
                <td>{department.description}</td>
                <td>{department.creationDate}</td>
                <td>
                  <td>
                    <button
                      onClick={() => this.departmentUsers(department.id)}
                      className="btn btn-success"
                    >
                      Users
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.updateDepartment(department.id)}
                      className="btn btn-info"
                    >
                      update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.deleteDepartment(department.id)}
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
export default DepartmentComponent;
