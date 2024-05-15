import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <h2>OOPSS !!!</h2>
      <h4>SOMETHING WENT WRONG</h4>
      <p>
        {error.status} {error.statusText}
      </p>
    </div>
  );
};

export default Error;
