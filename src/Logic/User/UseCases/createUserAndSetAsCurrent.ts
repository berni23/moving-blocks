import {usersStore} from "@/stores/users";
import createUser from "@/Logic/User/Services/createUser";


const uStore = usersStore();
const createUserAndSetAsCurrent = (name: string) => {

    let user = createUser(name);
    uStore.addUser(user);
    uStore.setUserAsCurrent(user);
    return user;
}

export default createUserAndSetAsCurrent;
