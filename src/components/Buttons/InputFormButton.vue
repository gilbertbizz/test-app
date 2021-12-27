<template>
  <div
    @click="toggleForm"
    class="w-48 h-10 flex items-center justify-center border border-gray-500 rounded cursor-pointer hover:bg-gray-700"
  >
    <a class="flex items-center space-x-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 4v16m8-8H4"
        />
      </svg>

      <span>Add Employee</span>
    </a>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "InputFormButton",
  methods: {
    ...mapMutations(["TOGGLE_FORM"]),
    toggleForm() {
      this.TOGGLE_FORM();
    },
  },
};
</script>

<style></style>
