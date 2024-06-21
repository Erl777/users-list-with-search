<script setup lang="ts">
import Input from "@/components/Input.vue";
import UsersList from "@/components/UsersList.vue";
import Loader from "@/components/Loader.vue";
import {useUsersStore} from "@/stores/users";
import {ref} from "vue";
import type {Ids, Names} from "@/types/user";

const searchStr = ref('')
const loading = ref(false)
const store = useUsersStore()

function formatQuery(searchStr:string):Ids | Names | false {
  const values = searchStr.split(',').filter(n => n)
  const isArrayOfId = Number(values[0])

  if(values.length === 0) return false

  if(isArrayOfId) {
    return {
      id: values,
    }
  } else {
    return {
      name: values
    }
  }
}

function checkUser() {
  const userExists = store.users.find((user) => user.id === store.selectedUser?.id)
  if(!userExists) store.selectedUser = null
}

async function search(value:string) {
  try {
    loading.value = true
    const params = formatQuery(value)
    if(params) {
      await store.getUsers(params)
    } else {
      store.users = []
    }
    checkUser()
  } catch (error) {
    alert('Error! Could not reach the API. ' + error)
  } finally {
    loading.value = false
  }
}

</script>

<template>
  <div class="sidebar">
    <header>
      <label class="title search-title">
        Поиск сотрудников
      </label>
      <Input
          v-model.lazy.trim="searchStr"
          v-debounce:500="search"
      />
    </header>
    <span class="title">
      Результаты
    </span>
    <UsersList
        :query="searchStr"
        class="results"
    />
  </div>
  <Loader v-if="loading"/>
</template>

<style lang="scss" scoped>
header {
  margin-bottom: 30px;
}
.sidebar {
  display: flex;
  flex-direction: column;
  width: 23%;
  padding: 27px 0 20px;
  & > header, & > span, & > div {
    padding-right: 23px;
    padding-left: 23px;
  }
}
.results {
  padding-top: 16px;
  overflow: auto;
}
.search-title {
  margin-bottom: 14px;
}
</style>