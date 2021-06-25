import React, { Component } from "react";
import UserComponent from "./UserComponent";
import DepartmentService from "../services/DepartmentService";
import { Route, useHistory, Switch, useParams } from "react-router-dom";

export default class DepartmentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: this.props.deptmnt,
    };
    this.departmentUsers = this.departmentUsers.bind(this);
    this.updateDepartment = this.updateDepartment.bind(this);
    this.deleteDepartment = this.deleteDepartment.bind(this);
  }
  departmentUsers() {
    //this.props.useHistory.push("/users");
  }
  updateDepartment(id) {
    this.props.history.push("/updageDepartment/${id}");
  }
  deleteDepartment(id) {
    DepartmentService.deleteDepartment(id).then((res) => {
      //this.props.history.push("/");
    });
  }
  render() {
    return (
      <tr key={this.state.department.id}>
        <td>{this.state.department.id}</td>
        <td>{this.state.department.name}</td>
        <td>{this.state.department.description}</td>
        <td>{this.state.department.creationDate}</td>
        <td>
          <button onClick={this.departmentUsers}>Users</button>
        </td>
        <td>
          <button
            onClick={() => this.updateDepartment(this.state.department.id)}
            className="btn btn-info"
          >
            update
          </button>
        </td>
        <td>
          <button onClick={this.deleteDepartment(this.state.department.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
