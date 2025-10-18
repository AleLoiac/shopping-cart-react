import { useParams } from "react-router";
import Shop from "./Shop";
import Cart from "./Cart";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";

const Page = () => {
  const { page } = useParams();

  const pages = {
    shop: <Shop />,
    cart: <Cart />,
  };

  if (!pages[page]) {
    return <ErrorPage />;
  }

  return <div className="container">{pages[page]}</div>;
};

export default Page;
