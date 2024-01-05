import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "dummy",
        mail: "dummy@gmail.com"
    }
})
export default UserContext