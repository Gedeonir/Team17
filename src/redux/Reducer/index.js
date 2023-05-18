import { combineReducers } from "redux";
import counter from "./counter";
import { LoginReducer } from "./LoginReducer";
import { fetchAllDepartmentsReducer,createDepartmentReducer,updateDepartmentReducer, deleteDepartmentReducer, getOneDepartmentReducer} from "./fetchDepartmentReducer";
import { fetchAllAppointmentsReducer,createAppointmentReducer } from "./AppointmentsReducer";
import { createDoctorReducer, deleteDoctorReducer, fetchAllDoctorssReducer, getOneDoctorReducer } from "./DoctorsReducer";

const rootReducer = combineReducers({
  counter: counter,
  Login:LoginReducer,
  allDepartments:fetchAllDepartmentsReducer,
  createDepartment:createDepartmentReducer,
  deleteDepartment:deleteDepartmentReducer,
  oneDepartment:getOneDepartmentReducer,
  updateDepartment:updateDepartmentReducer,

  allAppointments:fetchAllAppointmentsReducer,
  createAppointment:createAppointmentReducer,

  allDoctors:fetchAllDoctorssReducer,
  registerDoctor:createDoctorReducer,
  deleteDoctor:deleteDoctorReducer,
  oneDoctor:getOneDoctorReducer

});

export default rootReducer;