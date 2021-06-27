import React from "react";
import DepartmentService from "../services/DepartmentService";
import { Button } from '@material-ui/core';

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
      const data = this.state.departments.filter(i => i.id !== id)
      this.setState({departments: data})
      this.props.history.push("/");
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Departments List</h1>
        <div className="row">
          <Button variant="contained" color="primary" onClick={this.addDepartment}>
            Add Department
          </Button>
        </div>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Department Id</th>
              <th>Department Name</th>
              <th>Department description</th>
              <th>Department creationDate</th>
              <th>Actions</th>
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
                  
                    <button
                      onClick={() => this.departmentUsers(department.id)}
                      className="btn btn-success"
                    >
                      Users
                    </button>
                  
                    <button
                      onClick={() => this.updateDepartment(department.id)}
                      className="btn btn-info"
                    >
                      update
                    </button>
                  
                    <button
                      onClick={() => this.deleteDepartment(department.id)}
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
export default DepartmentComponent;
