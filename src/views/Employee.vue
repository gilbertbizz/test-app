<template>
  <div class="w h-full py-4">
    <router-link
      :to="{ name: 'EmployeeList' }"
      class="flex text-gray-400 space-x-1 mb-6 hover:text-gray-300"
    >
      <BackIcon class="text-gray-400 hover:text-gray-300" />
      <span>Go Back</span>
    </router-link>
    <!-- Header -->
    <div
      class="w-full flex justify-between items-center bg-gray-700 py-6 px-8 text-xs rounded-md"
    >
      <div class="flex items-center space-x-1">
        <span class="text-gray-300 text-2xl">{{
          currentEmployee.firstname
        }}</span
        ><span class="text-gray-300 text-2xl">{{
          currentEmployee.lastname
        }}</span>
      </div>
      <div
        class="flex justify-center items-center space-x-3 text-gray-700 font-bold"
      >
        <a
          class="px-2 py-1 bg-gray-500 hover:bg-gray-400 cursor-pointer rounded"
          >Edit</a
        >
        <a class="px-2 py-1 bg-red-500 hover:bg-red-400 cursor-pointer rounded"
          >Delete</a
        >
        <a
          class="px-2 py-1 bg-yellow-500 hover:bg-yellow-400 cursor-pointer rounded"
          >Print</a
        >
      </div>
    </div>
    <!-- content body -->
    <div class="mt-3 w h-96 flex justify-between bg-gray-700 rounded-md">
      <div class="p-6 flex">
        <div>
          <p class="text-gray-400 flex flex-col space-y-2">
            <span class="font-bold mr-6">ID:</span>
            <span class="font-bold mr-6">Location:</span>
            <span class="font-bold mr-6">Date of birth:</span>
            <span class="font-bold mr-6">Contact Number:</span>
          </p>
        </div>
        <div>
          <p class="text-gray-400 flex flex-col space-y-2">
            <span>{{ currentEmployee.empId }}</span>
            <span>{{ currentEmployee.address }}</span>
            <span>{{ currentEmployee.dateOfBirth }}</span>
            <span>{{ currentEmployee.contact }}</span>
          </p>
        </div>
      </div>
      <div class="p-6">
        <div
          class="w-36 h-36 border mr-6 rounded text-center text-gray-300 pt-12"
        >
          <p>Image...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import BackIcon from "../components/Icons/BackIcon.vue";

export default {
  name: "Employee",
  data() {
    return {
      currentEmployee: null,
    };
  },
  components: {
    BackIcon,
  },
  created() {
    this.getCurrentEmployee();
  },
  methods: {
    ...mapMutations(["SET_CURRENT_EMPLOYEE"]),

    getCurrentEmployee() {
      this.SET_CURRENT_EMPLOYEE(this.$route.params.empId);
      this.currentEmployee = this.currentEmployeeArray[0];
    },
  },
  computed: {
    ...mapState(["currentEmployeeArray"]),
  },
};
</script>

<style scoped>
.w {
  width: 90vw;
}
</style>
