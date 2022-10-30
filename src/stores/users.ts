import {defineStore} from "pinia";
import User from "@/customTypes/user";

export const useUsersStore = defineStore('users', {
        state: () => ({
            _users: [] as Array<User>,
            _currentUserId: null as number | null
        }),
        actions: {
            addUser(user: User) {
                this._users.push(user)
            },
            setUserAsCurrent(user: User) {
                this._currentUserId = user.id
            },
            getUserOfId(id: number) {
                return this._users.filter((user) => user.id == id);
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
            isCurrentUser: state => Boolean(state._currentUserId),
            currentUser: (state): User | undefined => state._users.find((u) => u.id === state._currentUserId)
        }
    }
)
