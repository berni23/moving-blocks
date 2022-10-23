import {defineStore} from "pinia";
import User from "@/customTypes/user";

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: [] as Array<User>,
        currentUserId: null as Number | null
    }),
    actions: {
        addUser(user: User) {
            this.users.push(user)
        },
        setUserAsCurrent(user: User) {
            this.currentUserId = user.id
        },
        getUserOfId(id: number) {
            return this.users.filter((user) => user.id == id);
        }
    },

    getters: {
        highestId: state => Math.max(...state.users.map(x => x.id)) ?? 0,
        isCurrentUser: state => Boolean(state.currentUserId),
        currentUser: state => state.users.find((u)=>u.id===state.currentUserId)

    }
})
