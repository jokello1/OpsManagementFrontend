import React from "react";
import DepartmentService from "../services/DepartmentService";

class UpdateDepartmentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      description: "",
      creationDate: ""
    };
    this.changeNamesHandler = this.changeNamesHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.updateDepartment = this.updateDepartment.bind(this);
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
  updateDepartment=(e)=>{
    e.preventDefault();
    let department = {
      id: this.state.id,
      name: this.state.names,
      description: this.state.description,
      creationDate: this.state.creationDate
    };
    DepartmentService.updateDepartment(department.id, department).then(
      (res) => {
        this.props.history.push("/");
      }
    );
  };
  componentDidMount() {
    DepartmentService.getById(this.state.id).then((res) => {
      let department = res.data;
      this.setState({
        names: department.name,
        description: department.description,
        creationDate: department.creationDate,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Department</h3>
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
                  <div style={{ marginTop: "10px" }}></div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateDepartment}
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

UpdateDepartmentComponent.propTypes = {};

export default UpdateDepartmentComponent;
