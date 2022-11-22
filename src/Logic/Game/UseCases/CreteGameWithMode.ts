import createGame from "@/Logic/Game/Services/Create/createGame";
import {useUsersStore} from "@/stores/users";
import User from "@/customTypes/user";
import clearFormerGameAndSetNewAsCurrent from "@/Logic/Game/UseCases/ClearFormerGameAndSetNewAsCurrent";
import {arrayModes} from "@/Logic/Game/constraints";

const createGameWithMode = (modeString: String) => {

    let mode = Object.assign({}, arrayModes.find((mode) => mode.name === modeString));
    const usersStore = useUsersStore();
    let user = usersStore.currentUser;
    const newGame = createGame(user ? (user as User).id : null, mode)


    clearFormerGameAndSetNewAsCurrent(newGame);
    return newGame;


}



export default createGameWithMode;
