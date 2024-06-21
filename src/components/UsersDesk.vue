<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import Preview from "@/components/Preview.vue";
</script>

<template>
  <div class="desk">
    <header>
      <h1>Жилфонд</h1>
      <span class="title title--thin">Пользователь</span>
    </header>
    <div class="container">
      <Sidebar />
      <Preview />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.desk {
  width: 100%;
  max-width: 1266px;
}
header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 26px;
}
h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  color: #E31F24;
}
.container {
  position: relative;
  display: flex;
  height: 575px;
  border-radius: 10px;
  background-color: #FDFDFD;
  box-shadow: 0 0 10px 0 #0000001A;
}
</style>