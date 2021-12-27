<template>
  <div class="flex justify-center items-center h-screen w-full z-50 fixed">
    <div
      class="h-64 w-96 flex flex-col justify-center items-center rounded-md py-12 px-8 min-w-min text-gray-300 bg-gray-700 shadow-lg"
    >
      <p class="flex flex-col text-center text-xl">
        <span>Are you sure you want to exit?</span>
        <span>Your changes will not be saved!</span>
      </p>
      <div class="flex space-x-16 mt-6">
        <button class="py-2 px-4 bg-purple-600 text-gray-300 rounded">
          Return
        </button>
        <button class="px-4 py-2 bg-red-600 text-gray-300 rounded">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style></style>
