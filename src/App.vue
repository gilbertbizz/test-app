<template>
  <div class="w-screen h-screen flex bg-gray-800">
    <div
      class="bar w-20 h-full flex flex-col justify-between items-center border-r border-gray-700 py-4 z-50"
    >
      <div class="flex flex-col space-y-8">
        <router-link to="/"><HomeIcon /></router-link>
        <router-link to="/employee-list"><GroupIcon /></router-link>
        <router-link to="/database"><DatabaseIcon /></router-link>
        <router-link to="/report"><ReportIcon /></router-link>
      </div>
      <div>
        <router-link to="/settings"><SettingsIcon /></router-link>
      </div>
    </div>
    <Modal v-if="modalActive" />
    <div class="mx-3">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import HomeIcon from "./components/Icons/HomeIcon.vue";
import GroupIcon from "./components/Icons/GroupIcon.vue";
import DatabaseIcon from "./components/Icons/DatabaseIcon.vue";
import ReportIcon from "./components/Icons/ReportIcon.vue";
import SettingsIcon from "./components/Icons/SettingsIcon.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    HomeIcon,
    GroupIcon,
    DatabaseIcon,
    ReportIcon,
    SettingsIcon,
    Modal,
  },
  computed: {
    ...mapState(["modalActive"]),
  },
};
</script>
<style scoped></style>
