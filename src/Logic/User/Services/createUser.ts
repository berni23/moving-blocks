import User from "@/customTypes/user";
import {usersStore} from "@/stores/users";


const uStore = usersStore();


const makeIdService = () => {
    return uStore.highestId + 1;
}

const createUser = (name: string) => {

    let user: User = {
        name: name,
        id: makeIdService()
    }

    return user;

}

export default createUser;
