import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">Go back to the home page by clicking here!</Link>
    </div>
  );
};

export default ErrorPage;
