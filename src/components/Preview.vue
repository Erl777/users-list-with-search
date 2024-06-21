<script setup lang="ts">
import IconEmpty from "@/components/icons/IconEmpty.vue";
import {useUsersStore} from "@/stores/users";

const store = useUsersStore()
</script>

<template>
  <div class="preview">
    <template v-if="store.selectedUser">
      <IconEmpty />
      <div class="content">
        <span class="title"> {{ store.selectedUser.name }} </span>

        <span><b>email:</b> {{ store.selectedUser.email }} </span>

        <span><b>phone:</b> {{ store.selectedUser.phone }} </span>

        <span class="title">О себе:</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </template>
    <span v-else class="info empty">Выберите сотрудника, чтобы посмотреть его профиль</span>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 77%;
  padding: 30px 30px 30px 21px;
  border-left: 1px solid #E0E0E0
}
.content {
  max-width: 439px;
}
.title:first-of-type {
  line-height: 19px;
}
.title:last-of-type {
  margin: 20px 0 25px;
}
p {
  line-height: 19.45px;
}
.content > span {
  display: block;
  margin-bottom: 10px;
  line-height: 21px;
}

.empty {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
b {
  font-weight: 600;
  color: #333333;
}
</style>