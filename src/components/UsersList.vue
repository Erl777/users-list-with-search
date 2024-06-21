<script setup lang="ts">
import UserCard from "@/components/UserCard.vue";
import {useUsersStore} from "@/stores/users";

defineProps<{
  query: string,
}>()

const store = useUsersStore()
</script>

<template>
  <div>
    <template v-if="query">
      <UserCard
          v-for="user in store.users"
          :key="user.id"
          :email="user.email"
          :name="user.name"
          :class="{ 'active': user.id === store.selectedUser?.id }"
          @click="store.selectedUser = user"
      />
      <span v-if="store.users.length === 0" class="info">ничего не найдено</span>
    </template>
    <span v-else class="info">начните поиск</span>
  </div>
</template>

<style lang="scss" scoped>

</style>