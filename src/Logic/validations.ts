import {useUsersStore} from "@/stores/users";
import {warning} from "@/Logic/Notifications";

export function userValidation(username: string,$q : any) {
    const userStore = useUsersStore();
    if (username.length <= 2) {
        warning('please choose a name with more than 2 characters',$q);
        return false

    } else if (userStore.getUserOfName(username)) {
        warning( 'a user named ' + username + ' already exists!',$q);
        return false
    }
    return true;
}

