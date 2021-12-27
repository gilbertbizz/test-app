import { createStore } from "vuex";
import { db } from "../firebase/dbInit";
import { collection, getDocs } from "firebase/firestore";

export default createStore({
  state: {
    formModal: null,
    modalActive: false,
    employeeData: [],
    currentEmployeeArray: null,
    employeesLoaded: null,
  },
  mutations: {
    TOGGLE_FORM(state) {
      state.formModal = !state.formModal;
    },
    TOGGLE_MODAL(state) {
      state.modalActive = !state.modalActive;
    },
    SET_EMPLOYEE_DATA(state, payload) {
      state.employeeData.push(payload);
      console.log(state.employeeData);
    },
    SET_CURRENT_EMPLOYEE(state, payload) {
      state.currentEmployeeArray = state.employeeData.filter((employee) => {
        return employee.empId === payload;
      });
    },
    EMPLOYEES_LOADED(state) {
      state.employeesLoaded = true;
    },
  },
  actions: {
    async GET_EMPLOYEES({ commit, state }) {
      const dbRef = collection(db, "Employees");
      const getEmployees = await getDocs(dbRef);
      getEmployees.forEach((doc) => {
        if (!state.employeeData.some((emp) => emp.docId === doc.id)) {
          const data = {
            docId: doc.id,
            empId: doc.data().empId,
            firstname: doc.data().firstname,
            lastname: doc.data().lastname,
            address: doc.data().address,
            dateOfBirth: doc.data().dateOfBirth,
            contact: doc.data().contact,
          };

          commit("SET_EMPLOYEE_DATA", data);
        }
      });
      commit("EMPLOYEES_LOADED");
    },
  },
  modules: {},
});
