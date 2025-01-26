import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS!!!!!</h1>
      <h2>Something wen wrong..</h2>
    </div>
  );
};
export default Error;
