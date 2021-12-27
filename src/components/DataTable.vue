<template>
  <table class="shadow-lg">
    <tr>
      <thead>
        <th class="bg-gray-600 text-left px-8 py-1 text-gray-900">ID</th>
        <th class="bg-gray-600 text-left px-8 py-1 text-gray-900">
          First Name
        </th>
        <th class="bg-gray-600 text-left px-8 py-1 text-gray-900">Last Name</th>
        <th class="bg-gray-600 text-left px-8 py-1 text-gray-900">Address</th>
        <th class="bg-gray-600 text-left px-8 py-1 text-gray-900">
          Date of Birth
        </th>
        <th class="bg-gray-600 text-left px-8 py-1 text-gray-900">Contact</th>
      </thead>
    </tr>
    <tbody>
      <tr
        v-for="(emp, index) in employeeData"
        :key="index"
        class="hover:bg-gray-700 bg-opacity-10 font-bold cursor-pointer"
      >
        <router-link :to="{ name: 'employee', params: { empId: emp.empId } }">
          <td class="px-8 py-3 text-gray-400">{{ emp.empId }}</td>
          <td class="px-8 py-3 text-gray-400">{{ emp.firstname }}</td>
          <td class="px-8 py-3 text-gray-400">{{ emp.lastname }}</td>
          <td class="px-8 py-3 text-gray-400">{{ emp.address }}</td>
          <td class="px-8 py-3 text-gray-400">{{ emp.dateOfBirth }}</td>
          <td class="px-8 py-3 text-gray-400">{{ emp.contact }}</td>
        </router-link>
      </tr>
    </tbody>

    <tbody></tbody>
  </table>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
export default {
  name: "DataTable",
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("GET_EMPLOYEES");
    });

    return {
      employeeData: computed(() => store.state.employeeData),
    };
  },
};
</script>

<style></style>
