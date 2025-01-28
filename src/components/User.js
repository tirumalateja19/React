import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Namaste OP 🚀 of user");
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("UseEffext return");
    };
  }, []);
  return console.log("Rendered");
};
export default User;
