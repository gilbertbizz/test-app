<template>
  <div
    class="top-0 left-0 z-50 h-full w-full absolute flex justify-center items-center animate-spin"
  >
    <span></span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
span {
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border: 3px solid transparent;
  border-top-color: #fff;
  border-bottom-color: #fff;
  border-radius: 50%;
  animation: spin ease 1000ms infinite;
}
</style>
