import { defineStore } from 'pinia'
import type {User, Ids, Names} from "@/types/user";
import axios from "axios";

export const useUsersStore = defineStore('users', {
    state: () => {
        return {
            users: [] as User[],
            selectedUser: null as User | null
        }
    },

    actions: {
        async getUsers(params:Ids | Names) {
            // при большом кол-ве элементов должен быть limit offset на беке,
            // тогда можно было бы сделать infinite scroll для списка пользователей
            this.users = (await axios.get('https://jsonplaceholder.typicode.com/users', {
                params
            })).data
        },
        setSelectedUser(user:User) {
            this.selectedUser = user
        }
    }
})