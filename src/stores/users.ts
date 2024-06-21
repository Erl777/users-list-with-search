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
            this.users = (await axios.get('https://jsonplaceholder.typicode.com/users', {
                params
            })).data
        }
    }
})