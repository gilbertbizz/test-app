<template>
  <div class="container">
    <div class="header h-14 flex items-center text-gray-300 py-2">Header</div>
    <div class="icons-bar h-14 flex items-center text-gray-300 py-2">
      <InputFormButton />
      <InputUI />
    </div>
    <div class="flex justify-center">
      <DataTable />
    </div>
    <transition name="form">
      <Form v-if="formModal" />
    </transition>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import InputFormButton from "../components/Buttons/InputFormButton.vue";
import DataTable from "../components/DataTable.vue";
import InputUI from "../components/InputUI.vue";
import Form from "../components/Form.vue";

export default {
  name: "Employee List",
  components: {
    InputFormButton,
    InputUI,
    Form,
    DataTable,
  },
  setup() {
    const store = useStore();

    return {
      formModal: computed(() => store.state.formModal),
    };
  },
};
</script>
<style scoped>
.container {
  width: 100vw;
}

/* animated form */
.form-enter-active,
.form-leave-active {
  transition: 0.8s ease all;
}

.form-enter-from,
.form-leave-to {
  transform: translateX(-700px);
  /* transform: translateY(-700px); */
}
</style>
