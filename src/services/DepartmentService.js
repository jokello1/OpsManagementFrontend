import axios from "axios";

const DEPARTMENTS_REST_API_URL = "http://localhost:8080/departments/";
class DepartmentService {
  getDepartments() {
    return axios.get(DEPARTMENTS_REST_API_URL);
  }
  createDepartment(department) {
    return axios.post(
      DEPARTMENTS_REST_API_URL + "createDepartment",
      department
    );
  }
  deleteDepartment(id) {
    return axios.delete(DEPARTMENTS_REST_API_URL + "delete/" + id);
  }
  updateDepartment(id, user) {
    return axios.put(DEPARTMENTS_REST_API_URL + "update/" + id, user);
  }
  getById(id) {
    return axios.get(DEPARTMENTS_REST_API_URL + id);
  }
}
export default new DepartmentService();
