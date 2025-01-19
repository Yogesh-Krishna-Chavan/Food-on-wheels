import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1 style={{ color: "red" }}>Opps...!!!</h1>
      <h1 style={{ color: "blue" }}>Something Went Wrong</h1>
      <h2>{err.error.stack}</h2>

      <h2 style={{ color: "green" }}>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
