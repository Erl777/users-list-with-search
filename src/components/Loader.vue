<script setup lang="ts">

</script>

<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader-container {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba( 0, 0, 0, .3);
  pointer-events: none;
}
.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m:
      conic-gradient(#0000 10%,#000),
      linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {to{transform: rotate(1turn)}}
</style>