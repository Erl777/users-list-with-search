<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input
      v-model="model"
      class="input"
      type="text"
      placeholder="Введите Id или имя"
  >
</template>

<style scoped>
.input {
  width: 240px;
  height: 49px;
  padding: 16px 24px;
  border-radius: 8px;
  border: 1.5px solid #E9ECEF;
  outline: none;
}

.input, .input::placeholder {
  color: #76787D;
}
</style>