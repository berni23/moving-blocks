import {defineStore} from "pinia";


export const useCounterStore = defineStore('user', {
    state: () => ({

        mode:,
        id: 0,
    }),

    actions: {
        setUser(user:{name:string,id:number}){
            this.name = user.name
            this.id = user.id
        },
        setName(value: string) {
            this.name = value;
        }


    }
})
