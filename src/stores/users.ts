import {defineStore} from "pinia";
import User from "@/customTypes/user";

export const useUsersStore = defineStore('users', {
        state: () => ({
            _users: [] as Array<User>,
            _currentUser: null as User | null
        }),
        actions: {
            addUser(user: User) {
                this._users.push(user)
            },
            setUserAsCurrent(user: User) {
                this._currentUser = user;
            },
            getUserOfId(id: number):User|undefined {
                return this._users.find((user) => user.id == id);
            }
        },

        getters: {
            highestId: state => {
                const userIds = state._users.map(x => x.id);
                let max = 0;
                if (userIds.length) {
                    max = Math.max(...userIds);
                }
                return max ? max : 0;
            },
            isCurrentUser: state => Boolean(state._currentUser),
            currentUser: state => state._currentUser
        },

        persist:true
    }
)
