<template>
  <div>
    <div class="h-14 w-full flex justify-between items-center">
      <div class="flex space-x-2">
        <CollectionIcon />
        <ChartIcon />
        <DownloadIcon />
        <CalendarIcon />
      </div>
      <div>
        <UserIcon />
      </div>
    </div>
    <div class="flex space-x-3">
      <div class="flex flex-col space-y-3">
        <div class="flex space-x-3">
          <LargeCard />
          <LargeCard />
          <LargeCard />
        </div>
        <div class="h-56 border border-gray-500">
          <div>
            <h1>down</h1>
          </div>
        </div>
      </div>
      <div class="left w-72 border border-gray-500">
        <h1>Left</h1>
      </div>
    </div>
  </div>
</template>

<script>
import LargeCard from "../components/LargeCard.vue";
import CalendarIcon from "../components/Icons/CalendarIcon.vue";
import ChartIcon from "../components/Icons/ChartIcon.vue";
import CollectionIcon from "../components/Icons/CollectionIcon.vue";
import DownloadIcon from "../components/Icons/DownloadIcon.vue";
import UserIcon from "../components/Icons/UserIcon.vue";

export default {
  name: "Home",
  components: {
    LargeCard,
    CalendarIcon,
    ChartIcon,
    CollectionIcon,
    DownloadIcon,
    UserIcon,
  },
};
</script>
<style scoped>
.left {
  height: 89vh;
}
</style>
