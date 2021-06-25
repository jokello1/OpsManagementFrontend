import axios from "axios";

const USERS_REST_API_URL = "http://localhost:8080/users/";
class UsersService {
  getUsersByDepartmentId(departmentId) {
    return axios.get(USERS_REST_API_URL + "department/" + departmentId);
  }
  createUser(user) {
    return axios.post(USERS_REST_API_URL + "createUser", user);
  }
  deleteUser(id) {
    return axios.delete(USERS_REST_API_URL + "delete/" + id);
  }
  updateUser(id, user) {
    return axios.put(USERS_REST_API_URL + "update/" + id, user);
  }
  getById(id) {
    return axios.get(USERS_REST_API_URL + id);
  }
}
export default new UsersService();
