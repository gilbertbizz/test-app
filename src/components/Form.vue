<template>
  <div
    @click="checkClick"
    ref="formWrap"
    class="wrapper fixed top-0 left-0 overflow-scroll"
  >
    <form
      @submit.prevent="submitForm"
      class="relative p-14 max-w-2xl w-full text-white bg-gray-700 shadow-lg"
    >
      <Loading v-show="loading" />
      <h1 class="mb-8 text-white">Employee Registration Form</h1>
      <div class="flex space-x-5">
        <div class="flex flex-col">
          <label>First Name</label>
          <input
            required
            type="text"
            v-model="firstname"
            class="bg-transparent border rounded text-gray-300 px-2 py-1"
          />
        </div>
        <div class="flex flex-col">
          <label>LastName</label>
          <input
            required
            type="text"
            v-model="lastname"
            class="bg-transparent border rounded text-gray-300 px-2 py-1"
          />
        </div>
      </div>
      <div class="flex flex-col mt-5">
        <label>Address</label>
        <input
          required
          type="text"
          v-model="address"
          class="bg-transparent border rounded text-gray-300 px-2 py-1"
        />
      </div>
      <div class="flex space-x-5 mt-5">
        <div class="flex flex-col">
          <label>Date of Birth</label>
          <input
            required
            type="text"
            v-model="dateOfBirth"
            class="bg-transparent border rounded text-gray-300 px-2 py-1"
          />
        </div>
        <div class="flex flex-col">
          <label>Contact</label>
          <input
            required
            type="text"
            v-model="contact"
            class="bg-transparent border rounded text-gray-300 px-2 py-1"
          />
        </div>
      </div>
      <div class="mt-5 flex space-x-5">
        <button
          class="px-3 py-2 bg-green-700 rounded cursor-pointer hover:bg-green-800"
        >
          Register
        </button>
        <a
          @click="cancelForm"
          class="px-3 py-2 bg-red-500 rounded cursor-pointer hover:bg-red-700"
          >Cancel</a
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { db } from "../firebase/dbInit";
import { collection, addDoc } from "firebase/firestore";
import { uid } from "uid";
import Loading from "../components/Loading.vue";

export default {
  name: "Form",
  components: {
    Loading,
  },
  data() {
    return {
      docId: null,
      loading: null,
      firstname: "",
      lastname: "",
      address: "",
      dateOfBirth: "",
      contact: "",
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_FORM", "TOGGLE_MODAL"]),
    checkClick(e) {
      if (e.target === this.$refs.formWrap) {
        this.TOGGLE_MODAL();
      }
    },

    cancelForm() {
      this.TOGGLE_FORM();
    },

    async submitForm() {
      this.loading = true;

      const dbRef = collection(db, "Employees");

      await addDoc(dbRef, {
        empId: uid(6),
        firstname: this.firstname,
        lastname: this.lastname,
        address: this.address,
        dateOfBirth: this.dateOfBirth,
        contact: this.contact,
      });

      this.loading = false;

      this.TOGGLE_FORM();
    },

    // calculateTotalEmployee() {
    //   this.totalEmployees = 0;
    //   this.employeeList.forEach((employee) => {
    //     this.totalEmployees += employee;
    //   });
    // },
  },
};
</script>

<style scoped>
.wrapper::-webkit-scrollbar {
  display: none;
}

@media (min-width: 900px) {
  .wrapper {
    left: 90px;
  }
}
</style>
