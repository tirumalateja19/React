import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  const { name, contact } = props;
  return (
    <div id="UserDetails">
      <h2>Name:{name}</h2>
      <h3>Location:Hyderbad </h3>
      <h3>Count:{count}</h3>
      <h3>Count2:{count2}</h3>
      <h3>Contact:{contact}</h3>
    </div>
  );
};
export default User;
