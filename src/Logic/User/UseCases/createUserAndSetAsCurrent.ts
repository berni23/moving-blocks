import {useUsersStore} from "@/stores/users";
import createUser from "@/Logic/User/Services/createUser";


const uStore = useUsersStore();
const createUserAndSetAsCurrent = (name: string) => {

    let user = createUser(name);
    uStore.addUser(user);
    uStore.setUserAsCurrent(user);
    return user;
}

export default createUserAndSetAsCurrent;
