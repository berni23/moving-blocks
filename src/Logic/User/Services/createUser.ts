import User from "@/customTypes/user";

import {useUsersStore} from "@/stores/users";

const createUser = (name: string ) => {
    const usersStore = useUsersStore();
    let user: User = {
        name: name,
        id:  usersStore.highestId +1
    }
    return user;
}

export default createUser;
