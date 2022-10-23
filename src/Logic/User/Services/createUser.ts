import User from "@/customTypes/user";

// import {usersStore} from "@/stores/store";
import {useUsersStore} from "@/stores/users";

const usersStore = useUsersStore();
const makeId = () => {
    return usersStore.highestId + 1;
}

const createUser = (name: string) => {
    let user: User = {
        name: name,
        id: makeId()
    }
    return user;
}

export default createUser;
