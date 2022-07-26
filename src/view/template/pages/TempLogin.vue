<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="height: 100vh; background-color: #f1f5ff;"
  >
    <div class="wrapper d-flex flex-column align-items-center m-0">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 400px;
  background-color: #f1f5ff;
}
</style>
