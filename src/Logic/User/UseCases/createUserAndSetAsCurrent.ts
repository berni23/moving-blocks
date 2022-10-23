import {useUsersStore} from "@/stores/users";
import createUser from "@/Logic/User/Services/createUser";

const createUserAndSetAsCurrent = (name: string) => {

    const uStore = useUsersStore();
    let user = createUser(name);
    uStore.addUser(user);
    uStore.setUserAsCurrent(user);
    return user;
}

export default createUserAndSetAsCurrent;
