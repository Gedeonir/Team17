import { combineReducers } from "redux";
import counter from "./counter";
import { LoginReducer } from "./LoginReducer";
import { fetchAllUsersReducer } from "./fetchAllUsersReducer";
import { fetchAllDepartmentsReducer,createDepartmentReducer,updateDepartmentReducer, deleteDepartmentReducer, getOneDepartmentReducer} from "./fetchDepartmentReducer";

const rootReducer = combineReducers({
  counter: counter,
  Login:LoginReducer,
  allUsers:fetchAllUsersReducer,
  allDepartments:fetchAllDepartmentsReducer,
  createDepartment:createDepartmentReducer,
  deleteDepartment:deleteDepartmentReducer,
  oneDepartment:getOneDepartmentReducer,
  updateDepartment:updateDepartmentReducer
});

export default rootReducer;