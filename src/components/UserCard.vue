<script setup lang="ts">

defineProps<{
  name: string,
  email: string,
}>()
</script>

<template>
  <div class="card">
    <img src="../assets/empty_small.svg" alt="avatar">
    <div class="content">
      <span class="title">{{ name }}</span>
      <span class="info">{{ email }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #0000001A;
  background-color: var(--vt-c-white);
  margin-bottom: 18px;
  &:hover {
    cursor: pointer;
  }

  &.active {
    img {
      border: 1px solid #E0E0E0;
      border-radius: 10px 0 0 10px;
    }
    .content {
      background-color: #E0E0E0;
      border-radius: 0 10px 10px 0;
      .title {
        margin-left: 13px;
      }
    }
  }

}
.title {
  font-size: 14px;
  line-height: 15px;
  margin-bottom: 5px;
}
.content {
  width: calc(100% - 70px);
  padding: 15px;
  border-left: 1px solid #E0E0E0
}
svg {
  width: 70px;
  min-width: 70px;
  height: 70px;
}
.info, .title {
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>