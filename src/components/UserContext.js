import { createContext } from "react";
// createCotext is used to create create a context which can be accessed anywhere

// we created USerContext with some data loggedInUser of Teja
const UserContext = createContext({
  loggedInUser: "React",
});
export default UserContext;
