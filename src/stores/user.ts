import {defineStore} from "pinia";

import User from "@/customTypes/user";

export const userStore = defineStore('user', {
    state: () => ({

        name:'',
        id: 0,
    }),

    actions: {
        setUser(user:User){
            this.name = user.name
            this.id = user.id
        },
        setName(value: string) {
            this.name = value;
        }


    }
})
